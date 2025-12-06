// FOR ARCHIVE PURPOSES ONLY - needs to be run using node i.e. `node cloudantToMongo`

/*
 *********** SET ENVIRONMENT
*/
const type = "prod"

// Environments
const env = {
    preprod: {
        cloudant: {
            url: "https://apikey-v2-2lpn1e1uubix0570lcsmmdevxayvikahqsgb84k6x1qb:2038f422fe91059385210223da796bfa@1cf349b4-299c-4396-9fe6-273bafaf8e0d-bluemix.cloudantnosqldb.appdomain.cloud",
            db: "innersource-discovery-persistence-service-preproduction-main-innersourcedb"
        },
        mongo: {
            url: "mongodb://ibm_cloud_f553e90b_4fec_459f_a3bd_093919791a59:ddc948da6d37e18a54da1e7c3e8f51895bff78e6ea062223ec17f46f458af78d@5a4904e1-6a34-40a2-bab0-53e61a099dec-0.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701,5a4904e1-6a34-40a2-bab0-53e61a099dec-1.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701,5a4904e1-6a34-40a2-bab0-53e61a099dec-2.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701/preprod?authSource=admin&replicaSet=replset&ssl=true&tlsCAfile=cert-innersource-portal.pem",
            db: "preprod",
            collection: "portal"
        }
    },
    prod: {
        cloudant: {
            url: "https://apikey-v2-1j8yp7rceb3q671asod9hrbhqdl8ncvm3uxgp6j2lmg7:9a4f914fb61eb2aaf6072830b106cb6d@c21436b9-4b30-4b6a-bc90-6adb4c82610c-bluemix.cloudantnosqldb.appdomain.cloud",
            db: "innersource-discovery-persistence-service-production-main-innersourcedb"
        },
        mongo: {
            url: "mongodb://ibm_cloud_f553e90b_4fec_459f_a3bd_093919791a59:ddc948da6d37e18a54da1e7c3e8f51895bff78e6ea062223ec17f46f458af78d@5a4904e1-6a34-40a2-bab0-53e61a099dec-0.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701,5a4904e1-6a34-40a2-bab0-53e61a099dec-1.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701,5a4904e1-6a34-40a2-bab0-53e61a099dec-2.c2f3lg8w0g8s0rkj98i0.databases.appdomain.cloud:30701/prod?authSource=admin&replicaSet=replset&ssl=true&tlsCAfile=cert-innersource-portal.pem",
            db: "prod",
            collection: "portal"
        }
    }
}

// CloudantDB (CouchDB) library
const nano = require('nano')(env[type].cloudant.url);

// MongoDB library
const mongoose = require('mongoose');

(async () => {
    try {
        // 1. Export current data from Cloudant
        const db = nano.use(env[type].cloudant.db);
        const alldata = await db.list({include_docs: true, limit: 2000, descending: true});
        const docs = alldata.rows.filter(i => i.doc.type === 'repository').map(({doc: {_id, ...rest}}) => ({...rest, cloudantId: _id}));

        // 2. Import current data into Mongo
        const COLLECTION = env[type].mongo.collection;
        const innerSourcePortalSchema = new mongoose.Schema({
            id: Number,
            cloudantId: String,
            status: { type: String,
                default: "active"
            },
            contribution: String,
            description: String,
            gitOrganizationId: Number,
            gitOrganizationName: String,
            gitRepositoryName: String,
            gitRepositoryUrl: String,
            lastCommitDate: Date,
            name: String,
            openIssues: Number,
            openPullRequests: Number,
            overview: String,
            private: Boolean,
            technologies: [String],
            totalContributors: Number,
            commitHistory: [ new mongoose.Schema({
              count: Number,
              timestamp: Number      
                },{_id:false})],
            languages: [ new mongoose.Schema({
              name: String,
              percentage: Number      
                },{_id:false})],
            installationId: Number,
            artifactoryPath: String,
            slackChannel: String,
            documentationLink: String,
            gettingStarted: String,
            clearinghouseDeliverableId: String,
            dependencies: { type: Array,
              default: []
            }
          }, {  timestamps: { createdAt: true, updatedAt: false }, versionKey: false, strict: true  });
        const innerSourcePortal = mongoose.model(COLLECTION, innerSourcePortalSchema, COLLECTION)

        await mongoose.connect(env[type].mongo.url);

        const collectionExists = await mongoose.connection.db.listCollections().toArray();
        if (collectionExists.filter(i => i.name === COLLECTION).length > 0) {
            await mongoose.connection.db.dropCollection(COLLECTION);
        }

        const addData = await innerSourcePortal.insertMany(docs)
        console.log(`Successfully merged ${docs.length} document(s) into ${env[type].mongo.db}`)

        mongoose.connection.close();

    } catch(e) { 
        console.log(e)
    }
  })();
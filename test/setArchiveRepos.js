// FOR ARCHIVE PURPOSES ONLY

/*
 *********** SET ENVIRONMENT
*/
const type = "preprod"

// Environments
const env = {
    preprod: {
        mongo: {
            url: process.env.MONGODB_URI,
            db: "preprod",
            collection: "portal"
        }
    },
    prod: {
        mongo: {
            url: process.env.MONGODB_URI_PROD,
            db: "prod",
            collection: "portal"
        }
    }
}

// MongoDB library
const mongoose = require('mongoose');

(async () => {
    try {

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
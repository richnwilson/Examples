import mongoose from "mongoose";

// New standars now use async instead or promises.
(async () => {
  try {
    const options = {
      tlsCAFile: `cert.pem`,
      autoIndex: false
    }
    await mongoose.connect("mongodb://ibm_cloud_19d729b4_aa6b_48b3_b45a_48619f335fa4:1f6b3132118f78be8957c0d8b084b664f9b1e266f1ff6d81a717ec4566bb5d11@2ba457d7-1842-434b-af2f-1c30464e6df8-0.c5km1ted03t0e8geevf0.databases.appdomain.cloud:31194,2ba457d7-1842-434b-af2f-1c30464e6df8-1.c5km1ted03t0e8geevf0.databases.appdomain.cloud:31194,2ba457d7-1842-434b-af2f-1c30464e6df8-2.c5km1ted03t0e8geevf0.databases.appdomain.cloud:31194/oicdb-dev?authSource=admin&replicaSet=replset&tls=true", options);
    console.log(`Connected to MongoDB [ oicdb-dev ] succesfully...`);

    const collaboratorsSchema = new mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      email: String,
      status: String,
      leftIBMDate: Date,
      canLead: Boolean,
      ecOverride: Boolean,
      _lastLeadOldInitiative: [ {
        _id: false,
        endDate: Date,
        title: String,
        status: String
      }],
      yl: {
        id: String,
        name: String,
        status: String,
        completedDate: Date
      },
      CTR: {
        $type: [ {
          _id: false,
          type: String,
          year: String
        }],
        default: undefined },
      w3: {
        talentId: String,
        nameDisplay: String,
        isEmployee: Boolean,
        group: String,
        unit: String,
        slackId: String,
        functionalManager: String,
        c: String,
        badges: {
          $type: [ {
            _id: false,
            badgeName: String,
            badgeId: String,
            badgeImageURL: String,
            issueDate: Date
          }],
          default: undefined },
      },
      role: {
        $type: [ {
          _id: false,
          type: String,
          start: Date,
          end: Date,
          team: String,
          isApprover: Boolean,
          isLeader: Boolean
        }],
        default: undefined },
        logs: {
          system: [ {
              _id: false,
              comment: String,
              date: {$type: Date, default: () => Date.now() }
          }],
          auditTrail: [ {
              _id: false,
              user: String,
              action: String,
              type: String,
              date: {$type: Date, default: () => Date.now() }
          }]
      }
      }, {
        timestamps: { 
          createdAt: true, 
          updatedAt: true }, 
        versionKey: false, 
        strict: true,
        typeKey: '$type'
        }
    );

    const collaborators = mongoose.model("collaborators", collaboratorsSchema, "collaborators");

    const { insertedCount = 0 } = await collaborators.bulkWrite(
      [
        {
          "insertOne":{
            "document":{
              "email":"diego.torres.garcia@ibm.com",
              "status":"active",
              "leftIBMDate":null,
              "canLead":null,
              "ecOverride":null,
              "yl":null,
              "role":null,
              "ctr":null,
              "w3":{
                "talentId":"074258781",
                "nameDisplay":"Diego Torres Garcia",
                "isEmployee":true,
                "group":"Research",
                "unit":"Catalyst",
                "slackId":"WCW36C7U3",
                "functionalManager":"wendybrn@us.ibm.com",
                "c":"mx"
              },
              "_lastLeadOldInitiative":null,
              "logs":
                {"system":[
                  {"comment":"Added to collaborators as first time on initiative",
                    "date":"2024-09-12T21:46:38.125Z"
                  }
                ]}
              }
            }
          }
        ]
    )

  } catch (err) {
    console.log(`Error trying to connect to MongoDB - ${err.message}`);
    process.exit(1);
  }
})();
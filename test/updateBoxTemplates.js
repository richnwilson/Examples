import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import BoxSDK from 'box-node-sdk';
const sdk = new BoxSDK({
    clientID: "027kvp8xir880rbcnz1speqas0wfhdaj",
    clientSecret: "eZ6GVk8gpm8OHHRHXFo8Z67f54KT0UId",
    appAuth: {
        keyID: "t8owlhgb",
        privateKey: "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQINygR75Gb50wCAggA\nMBQGCCqGSIb3DQMHBAicR0gqpNCNVgSCBMhLOO6Yi1QwwNZGWQJAvFZqLVWxWIaN\nsovQfN6A53t612DnCScOJnqK67fP7/+bh4TNar7h2Dg9zPHinH2TGDtRR9pzSLBK\nFC9V1/Y8T3BW83E5sm7lPQoXL3OCZVs1fgJNH/PL/bwcLhVFDz51PE1kr0cKb0ki\nuv5A7Zd94YsF716Pd79pawOX/v6ErsUNY21DMTG9FDDq5C+k+Z2qHG6U/On5bdOQ\nS9zXhnSos1WPhWLECg5sScEOKpnc9YCpYL0n0KqLdUJ259FgLGub7t/waAZgq0d+\nJA5grXioWi84nA0x+GCy8nyylnlT/TNUgUy3Ne3Y7YEILp62kF9WT1bmZhOubmrd\nlilCOm4FcUB6MmZQAmfm5g7eWPsydIW5Q3ODFPqVm5tgtgJcVMx9Vn2ULfUT+UBy\naR6EI+jdYi8k3LY975qvrdhCg7M8f1ariNWUL56yDAoIXidGmAjx7H4G0gZF3MAT\nraP2ZNor9ccMiVoGYtKhUg1vGV5jfCiU8WAU5I4NUKGVqNTvG3jSD88pUzrq1PD6\nWTeo/ouJsX129l9g3r8Pdgpaagw4S0sInY4iH1VanyRmOgk6XIYfYPiffNL5mCIK\necdUe4yAC9SlmAzUKE8VaSS/oytWf08HVGt93f5jENDCV0MigHi67k+gnp51U4xH\nhOWPwcPT4O7AWMd9yqzOvYs5AP30QbyPSpo2gG5NATSwM5Ai3+zg1QoXLk/LS+AH\nOmsu9Iase/RYZrmHJfgbYO3IXrIs3k3GiFz0lFhhzxllRMHjaQaHHZuZsDg+qAB2\nkz7ukJiBbn9FxB+7Gmxo9d0XmDSMT7IyLjVvSC/QupOfmoyKoPnbqzSXSo7sZxlu\nzf/qo/spNTLc3pi1DyyJJOayT1sB5h127mGHt4G7xXj9OSwuQRHbpISHNO+JrjJX\nUK9EpyE2tbILNajyyYmGRvP5ht1C2gVUqxNw13Ox+H+YUWtE98tA8jRtalIwPb44\njH9PT9y4xPx1sGH8pXedUvqjR1VBpU4Z7IXWGEFhEGd+DkM/jwPCAkBVhNhDPwd0\n40kwU6wG9JFrs9EKa2Uu+PPBOj1UagW4hVRyN+NMuQnN1s0rDLM178nTNeOg/aZR\nZYdt4ROn8dv1qGBQN+rwWAzC+NFEoNagte6hnsiIICUYhyEKDKOuNGaKb61jeJ35\nkCHubYbWfUB94MP1W6T2C4J6vyG2W93AOf3fy4I1AcT0D5ZRON0cvhjMvvqwai0z\nDJzG2fQK6qDKxDWbzNfkpiABqlPZsa2LWTcIx45OOFLJZHMp02SukXIPzi/noEez\ny/PT/OBs74QZHhAvkxcQPwWDGOOxRGgG3fBxm/3yEqSRslBcNG/52aBSnNhSJ/6i\nk8rsPBhSq4k3jtPylZIXLIOXm1EjXIV1kK3Hq0GuZ1LbacYzrGjpUsPdHI8Fqz6s\n7Hr8Znp03ooEp9FfsrmokxYbDFZigOY29TjPhw8ugZrargxyMOU6tB/FcHp8LbyQ\n/GhGa+CMtl2+nwvBuoE9EP9+RaNK4H+g3n9lgmq5ejtFT6x+5+1wPe/eG5fB2ZhM\ngWxbn6YgUq79rSgbpa3YSqQdbu6n4r/OlT0+4PuC4wiZfCGE9u4z7ABaVD6IbQua\nsSs=\n-----END ENCRYPTED PRIVATE KEY-----\n",
        passphrase: "22f71af4261e02c4c9e838ad6fefb0d6"
    }
});
const serviceAccountClient = sdk.getAppAuthClient('enterprise', '455328');

const InitiativesSchema = new mongoose.Schema({
    _id: [mongoose.Schema.Types.Mixed],
    segNo: String,
    title: String,
    status: String,
    type: String,
    leader: String,
    leaderInternet: String,
    sponsor: [String],
    sponsorInternet: [String],
    executiveChampion: [String],
    executiveChampionInternet: [String],
    executiveChampionReason: [String],
    associatedBusinessUnit: String,
    associatedBusinessUnitOther: String,
    patentInterest: Boolean,
    focusArea: String,
    affiliateName: [String],
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    industryName: String,
    description: String,
    problemStatement: String,
    outcome: String,
    finalOutcome: String,
    SEOTitle: String,
    SEODescription: String,
    SEOKeywords: String,
    coleaders: [String],
    coleadersInternet: [String],
    participants: [String],
    participantsInternet: [String],
    contributors: [String],
    contributorsInternet: [String],    
    ERBReviewerInternet: [String],
    blogURL: String,
    slackURL: String,
    boxURL: String,
    githubURL: String,
    muralURL: String, connectionsURL: String,
    otherCollaborationURL: String,
    mainCollaborationURL: String,
    draftDate: {
      type: Date,
      default: null
    },
    submittedDate: Date,
    approvalMessage: String,
    approvedDate: Date,
    approvedBy: String,
    closeValue: String,
    requestClousureDate: {
      type: Date,
      default: null
    },
    closedDate: {
      type: Date,
      default: null
    },
    closedBy: String,
    requestPublicationDate: {
      type: Date,
      default: null
    },
    publicationSourceURL: String,
    approvedPublicationDate: {
      type: Date,
      default: null
    },
    ERBApproved: String,
    acknowledge: String,
    reportURL: [String],
    reportNo: String,
    finalPublicationDate: {
      type: Date,
      default: null
    },
    finalPublicationBoxURL: String,
    publicationConfidential: String,
    publicationCategory: String,
    publicationDescription: String,
    publicationContributors: [String],
    legacyParticipantType: String,
    legacyAutoApprove: String,
    legacyValue: String,
    lastUpdateDate: Date,
    openCallsForParticipation: Number,
    excludeInCi: Boolean,
    participantsRating: [String],
    ERBReviewerRating: [String],
    affiliateTypeChecked: Boolean,
    isAffiliateFocalApproved: Boolean,
    affType: String,
    lastChangedBy: [String],
    sponsorRegion: String,
    rating: Number,
    ratingComments: String,
    adminComments: String,
    isSprclose: String,
    pubreq: String,
    sponsorMessage: String,
    closedByName: String,
    endDateUpdatedCounter: Number,
    lastBPCheckDate: Date,
    publicBoxURL: String,
    publicBoxFolderId: String,
    boxURL_creating: Boolean,
    publicBoxURL_creating: Boolean,
    showcaseApproved: Boolean,
    showcaseComments: String,
    allowUnlimitedParticipants: String,
    submittedReminder: Boolean
}, { timestamps: true });
 
const Initiative = mongoose.model("Initiative", InitiativesSchema, "Initiative");

const MONGODB_URI = 'mongodb://ibm_cloud_8f598e46_c2c5_4132_8fe5_1d4f43918104:2f98fcbec36881ce903ae4bc0a7da0a26ec07af93ab05d83b1bddb0c6d50f17b@5d985e8e-03c0-4729-bee8-943b20e728e5-0.bn2a0fgd0tu045vmv2i0.databases.appdomain.cloud:31812,5d985e8e-03c0-4729-bee8-943b20e728e5-1.bn2a0fgd0tu045vmv2i0.databases.appdomain.cloud:31812/aotdb-dev?authSource=admin&replicaSet=replset';
const DBNAME = 'aotdb';

/*
Deleted files kept for 30 days in trash
- Click on Trash icon in side bar
- CLick search dropdown to filter on owners (if necessary)
- Check box for 'Only search inside of Trash'

Key files
Root
	-	Showcase.pptx
	-	README.boxnote
	-	OnePage.pptx
	-	README.html
	-	readme.txt
Publications
	-	AoT Showcases Template 2021.pptx
	-	IBM AoT Presentation Template 2021.pptx
	-	IBM AoT Presentation Template 2021.potx
	-	Template-AoT-Technote-2021.docx
	-	Template-AoT-Report-2021.docx
*/

(async () => {
    try {
        const options = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          sslCA: fs.readFileSync(`${__dirname}/cert.pem`),
          ssl: true,
          autoIndex: false
        }
        mongoose.connect(MONGODB_URI, options);
        console.log(`Connected to MongoDB [ ${DBNAME} ] succesfully...`);
  
        // CODE HERE
        const initiatives = await Initiative.find({status: "Open"})
            .select({_id: 1, title: 1, boxURL: 1 })
            .lean()
            .exec();

        // Get template files
        const { entries: templateFiles } = await serviceAccountClient.folders.getItems("81043726225");

        let data='';
        let count=1;

        for (const initiative of initiatives) {
            // Grab box folder Id from initiative
            const privateBoxId = initiative.boxURL.split("/").pop() || '9999999';

            const initDetails = `"${initiative._id}","${initiative.title}"`;

            console.log(`${count} of ${initiatives.length + 1} - Started -  ${initDetails}`);

            let fileChanges=[];

            if (privateBoxId === '9999999') {
                data += `${initDetails},"No Private box folder found on initative - ignored"\n`;
                count++
                continue;
            }

            // Manage current Initiative files 
            const { entries: initFiles = []} = await serviceAccountClient.folders.getItems(privateBoxId);
            if (initFiles.length === 0) {
              data += `${initDetails},"No Private box folder exists - ignored"\n`;
              count++
              continue;
            }

            // Deal with root files
            const oldFiles = ["showcase.pptx", "onepager.pptx", "readme.boxnote","readme.html","readme.txt"];
            
            for (const file of initFiles) {
              if (oldFiles.includes(file.name.toLowerCase()) && file.type === 'file') {
                const { modified_by : { name : rootName }} = await serviceAccountClient.files.get(file.id);
                if ( rootName.toLowerCase() === 'ibmaot' || rootName.toLowerCase() === 'oic ibmoic') {
                    await serviceAccountClient.files.delete(file.id);
                    fileChanges.push(`${file.name} (deleted)`);
                } else {
                    fileChanges.push(`${file.name} (kept)`);
                } 
              }
            }

            try {
              const addRootFile = await serviceAccountClient.files.copy("1385830103945",privateBoxId);
              fileChanges.push(`README.boxnote (added)`);
            } catch(e) {
              fileChanges.push(`README.boxnote (kept)`);
            }

            // Deal with Publication files
            const pubFolder = initFiles.filter(i => i.name === 'Publication')
            if (pubFolder.length === 0) {
              data += `${initDetails},"No Publication folder exists - ignored"\n`;
              count++
              continue;
            }

            const pubFolderId = pubFolder.map(i => i.id).toString();
            const { entries : pubFiles } = await serviceAccountClient.folders.getItems(pubFolderId);

            if (pubFiles.length !== 0) {
              for (const file of pubFiles) {
                  if (file.type === 'file' && /template/i.test(file.name)) {
                      const { modified_by : { name }} = await serviceAccountClient.files.get(file.id);
                      if ( name.toLowerCase() === 'ibmaot' || name.toLowerCase() === 'oic ibmoic') {
                          await serviceAccountClient.files.delete(file.id);                        
                          fileChanges.push(`${file.name} (deleted)`);
                      } else {
                          fileChanges.push(`${file.name} (kept)`);
                      }       
                  }
              }
            }

            // Copy new template files into current Initiative folder
            for (const file of templateFiles) {
                try {
                    const addFile = await serviceAccountClient.files.copy(file.id,pubFolderId);
                    fileChanges.push(`${file.name} (added)`);
                } catch(e) {
                    fileChanges.push(`${file.name} (skipped)`);
                }   
            }
            data += `${initDetails},"${fileChanges}"\n`;
            console.log(`${count} of ${initiatives.length + 1} - Finished -  ${initDetails}`);
            count++
        }
        fs.writeFileSync('boxTemplatesUpdate.csv', data);
        process.exit(1);
      } catch (err) {
        console.log(err.message);
        process.exit(1);
      }
})();
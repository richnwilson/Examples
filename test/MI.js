const recs=[];
const data = [
    {
        internetAddress: "marc.yvon@fr.ibm.com",
        MIYear: "2015"
    },
    {
        internetAddress: "scott.schneider@us.ibm.com",
        MIYear: "2016"  
    }
];
for (const {internetAddress, MIYear} of data) {
    recs.push({updateOne: {
        filter: {internetAddress},
        update: {"$set": {isMI: "yes", MIYear}},
        upsert: true}});
    }
const extend = require('util')._extend;
const x = {
    "_id": { "$oid": "606225d55143b64768b5faf5" },
    "wwwOptIn": "",
    "w3OptIn": "",
    "pi4EU": "",
    "audit": [
      "Modified by Andy Ramos on 10/5/2018 5:06:01 PM - Action=Web - Saving "
    ],
    "lettersSent": [
      "Other Letter Sent - AoT November Blog Digest - 12/2/2020",
      "Other Letter Sent - Technical Leadership Community - Next Steps - 12/9/2020"
    ],
    "adminCmts": [],
    "position": ["Academy Member", "Distinguished Engineer"],
    "lastUpd": { "$date": "2020-09-04T11:34:46.000Z" },
    "slack": "",
    "acountOth": "",
    "wechat": "",
    "github": "",
    "ibmR": "",
    "blogspot": "",
    "aboutme": "",
    "youtube": "",
    "linkedIn": "",
    "faceBook": "rrflores@us.ibm.com",
    "twitter": "@romehflores",
    "industrySecondary": "Energy and Utilities",
    "industry": "Government",
    "year": "2008",
    "isMIMentor": "",
    "miYear": "2009",
    "isMI": "Yes",
    "isMIStartDate": "",
    "isMIEndDate": "",
    "focalTeam": ["Standing Teams"],
    "coreTeam": ["Diversity/Inclusion"],
    "isaffCL": "",
    "isaffL": "",
    "isMemberClass": "",
    "isEcOvr": "Yes",
    "isTC": "Yes",
    "isVP": "",
    "isVPStartDate": "",
    "isVPEndDate": "",
    "DateLeft": "",
    "pYear": "",
    "isPresident": "",
    "isPresidentStartDate": [""],
    "isPresidentEndDate": [""],
    "hideWeb": "",
    "displayOrder": "1",
    "isStaff": "",
    "isDE": "Yes",
    "isDEStartDate": "",
    "isFellow": "",
    "isFellowStartDate": "",
    "TC": "",
    "isALT": "Yes",
    "isALTStartDate": [[""]],
    "isALTEndDate": "",
    "cNum": "440250897",
    "Languages": [],
    "aotDateLeft": [""],
    "electionStatus": "Elected",
    "validInternetAddresses": [],
    "lastName": "Flores",
    "nickName": "Romelia",
    "internetAddress": "rrflores@us.ibm.com",
    "status": "0",
    "seqNo": "Flo1751489",
    "isCoreTeamLeader": "Yes",
    "coreTeamStartDate": [""],
    "coreTeamEndDate": [""]
  };  
let _clone = extend({}, x);

['patents','bgImage','acclaimURL','badgeName','expertiseProficiency','expertiseLvl','expertise','businessUnit','state','country','city','countryCode','serial','title','internetaddress_1','firstName','notesId','seqNo','IMT','IOT'].forEach(i => {
    delete _clone[i];
});
// Add new fields as strings, that we may need to grab from Domino API at some point
['isMIStartDate','isMIEndDate','isVPStartDate','isVPEndDate','isDEStartDate','isFellowStartDate','isALTStartDate','isALTEndDate'].forEach(i => {
    _clone[i]='';
});
// Add new fields as arrays, that we may need to grab from Domino API at some point
['isPresidentStartDate','isPresidentEndDate','validInternetAddresses','coreTeamStartDate','coreTeamEndDate'].forEach(i => {
    _clone[i]=[''];
}) ;
console.log(_clone);
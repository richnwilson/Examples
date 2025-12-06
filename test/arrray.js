// [{
//     "reportChain":[
//         {"NAME":"x",
//          "JOBRESPONSIB":"y",
//          "INTERNET":"z"},
//         {"NAME":"a",
//          "JOBRESPONSIB":"b",
//          "INTERNET":"c"}
//         ],
//     "_uid":"973339897"}]
const newData = [];
const recData = {};
recData["reportChain"]=[];
recData["reportChain"].push({"NAME": "x", "JOBRESPONSIB":"y", "INTERNET":"z"});
recData["reportChain"].push({"NAME": "a", "JOBRESPONSIB":"b", "INTERNET":"c"});
recData["uid"] = "973339897";
newData.push(recData);
console.log(JSON.stringify(newData));

const NOTESFORMAT = /^CN=(.*)\/OU=(.*)\/O=(.*)\@.*/
console.log('CN=Richard Wilson/OU=Denver/O=IBM@IBMUS'.replace(NOTESFORMAT,'$1/$2/$3'));
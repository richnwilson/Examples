x = {a: 1, b: 2, c: 3};
const y = Object.values(x).reduce((acc,item)=> {
    return acc["$set"] = item,{}
});
console.log({"$set": x});

const z = [{mail: "rwilson@us.ibm.com","_slackId": "aSdasdas"}, {mail: "Andy.M.Ramos@ibm.com"}];

console.log(z.find(i=>i.mail === 'Andy.M.Ramos@ibm.com')._slackId)
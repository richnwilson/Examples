const x = ["a@us.ibm.com", "B@us.ibm.com"];
const y = ["B@us.ibm.com"];

const y_new = y.filter(i=> !x.map(i=> i.toLowerCase()).includes(i.toLowerCase()));
console.log(y_new);

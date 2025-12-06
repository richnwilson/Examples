const leader = "a@us.ibm.com";
const coleaders = ["b@us.ibm.com","c@us.ibm.com"];

console.log([leader, ...(typeof coleaders === 'undefined' ? [] : coleaders)]);
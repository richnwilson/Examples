const x = ["rwilson@us.ibm.com"];
const y = ["rwilson@us.ibm.com","andy.m.ramos@ibm.com"];

console.log(y.filter(i => !x.includes(i)));

for (let j of y) {
    console.log(j);
}
let k =0 
y.forEach(iter => {
    console.log(iter);
    k+=1;
    console.log(k);
})
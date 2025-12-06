const x = ["A","b","C"];
const y= "A";
console.log(x.some(user => user.trim().toLowerCase() === y.trim().toLowerCase()));
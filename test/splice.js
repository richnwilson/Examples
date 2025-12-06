let x = ['a','b','c','d'];
let y,z;

x.splice(0,2);

console.log(`splice - ${x}`);

z = x.slice();

console.log(`slice - ${z}`);
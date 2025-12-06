const x = {a: 1, b: 2, c: 3};
const y = {d: 4, e: 5, f: 6};

console.log({...x, d: 4});
const z = {...x, ...y};
console.log(z);
const a_b = ["a","b"];
const c= "c";

console.log([... new Set([...a_b, ...[c]])])
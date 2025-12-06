let x = []
let y = [{a: 1, b: 1}, {a: 2, b:1}]
x = [ ...x, ...y]
let z = [{a: 3, b: 2}, {a: 4, b:2}]
x = [ ...x, ...z]
console.log(x)
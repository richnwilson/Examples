let x = {a: {b: {c: "1"}}};
let y = {d: "1"};

x.a.b = {... x.a.b, ...y};
console.log(x);
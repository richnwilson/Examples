const all = ["a","b","c","D"]
const found = ["A","d"]

console.log(all.filter(i => !found.find(j => j.toLowerCase() === i.toLowerCase())))

let recs = []

const a = [{
    a: 1,
    b: 1
},
{   a: 2,
    b: 2
}]

const b = [{
    a: 3,
    b: 3
},
{   a: 4,
    b: 4
}]

console.log([ ...recs, ...a, ...b])
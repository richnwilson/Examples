let to =["a","b","C"];
let cc = ["b","c"];
let bcc = ["a","d"]

to = to.map(i => i.toLowerCase())
cc = cc.map(i => i.toLowerCase())
bcc = bcc.map(i => i.toLowerCase())

to = [...new Set(to)];
cc = cc.filter(i => !to.includes(i))
bcc = bcc.filter(i => ![...new Set([...to, ...cc])].includes(i))

console.log("to:",to)
console.log("cc:",cc)
console.log("bcc:", bcc)

const nonIBMemail = [ ...new Set([...to, ...cc, ...bcc])].filter(i => !i.trim().endsWith('ibm.com'))

console.log(nonIBMemail)

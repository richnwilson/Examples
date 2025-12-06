const x = ["true","false"];
const y = ["true","false"];

const same = x.every((elem,idx) => {
    return elem === y[idx]
})

console.log(same);
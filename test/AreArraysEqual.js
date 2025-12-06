const array1 = ["A","B","C"];
const array2 = ["C","C","A"];

if (isArrayEqual(array1,array2)) {
    console.log("Same");
} else {
    console.log("Not Same");
}

function isArrayEqual(a,b) {
    return (a.length === b.length) && a.every((element) => {
    return (b.includes(element)) 
    })
}
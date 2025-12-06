const data = [
    "Te",
    ["1","2"],
    ["",""],
    ["a","b"]
];

let searchData=[], i=0;
for (const item of data[1]) {
    searchData.push({id: item, label: data[3][i]})
    i+=1;
}

console.log(searchData);
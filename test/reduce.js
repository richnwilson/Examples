// 1. Flatten array
const arr = [[0,1],[2,3],[3,4],[5,6]];
console.log(arr.reduce((acc, cur) => {
    return acc.concat(cur);
},[]));

// 2. Group array by property 
let countries = [ 
    {name: "Germany", continent: "Europe"},
    {name: "Brazil", continent: "South America"},
    {name: "India", continent: "Asia"},
    {name: "France", continent: "Europe"},
    {name: "South Korea", continent: "Asia"}                 
];

console.log(countries.reduce((acc, cur) => {
    if (!acc[cur.continent]) {
        acc[cur.continent] = [];
    }
    acc[cur.continent].push(cur);
    return acc;
},{}))
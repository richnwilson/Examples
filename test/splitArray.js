const leader = ["Richard Wilson","Andy Ramos"];
const leaderInternet = ["rwilson@us.ibm.com", "Andy.M.Ramos@ibm.com"];

console.log(leader.reduce((acc,cur,i) => {
    return acc =+ `[${cur}](${leaderInternet[i]}) `
},""));

console.log(leader.map((val,i) => {
    return `[${val}](${leaderInternet[i]}) `
}).join(','))
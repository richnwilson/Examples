const x = [{
    shortName: "a",
    leaderInternet: "1@a.com",
    coleadersInternet: []
},{
    shortName: "b",
    leaderInternet: "2@a.com",
    coleadersInternet: ["1@a.com", "3@a.com"]
}]

const clean = x.map( i => ({shortName: i.shortName, leaders: [...[i.leaderInternet], ...i.coleadersInternet]}))
const leaders = [...new Set(clean.reduce((arr,{leaders}) => [ ...arr, ...leaders],[]))]
console.log(leaders)

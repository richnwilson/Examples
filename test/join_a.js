const initiative = {
    leaderInternet: "rwilson@us.ibm.com",
    coleadersInternet: ["andy.M.Ramos@ibm.com", "rwilson@us.ibm.com"]
};

const leaderInternet = typeof initiative.leaderInternet === 'string' ? [initiative.leaderInternet] : initiative.leaderInternet;
const coleadersInternet = typeof initiative.coleadersInternet === 'string' ? [initiative.coleadersInternet] : initiative.coleadersInternet;
console.log([...new Set([...leaderInternet, ...coleadersInternet])])
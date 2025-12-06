const params = {
    leaderInternet: "rwilson@us.ibm.com"
}

console.log(params.affCoLeaders?.map(co => co.coleaderInternet) || [])
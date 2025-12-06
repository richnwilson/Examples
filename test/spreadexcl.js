const x = [{ 
    rating: 1, 
    datesInfo: { 
        start: "now",
        end: "later",
        nothing: "nothing"
    }
}]

const y = ["rating","datesInfo.nothing","datesInfo.x"]
console.log(x.map(i => {
    for (const j of y) {
        delete i[j]
    }
    return i
}))
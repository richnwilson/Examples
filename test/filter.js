["a","b","C","D","E"].forEach((i,e) => {
    console.log(["a","b","c"].findIndex((x)=> {x.trim().toLowerCase() === i.trim().toLowerCase()}) < 0)
})
const data = [
    { 
        primary: true,
        name: "leadership"
    },
    {
        primary: false,
        name: "AI"
    }
]

console.log(data.filter(i => i.primary).map(i => i.name).toString())

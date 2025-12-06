const x = [
    { 
        _id: "1",
        collaborators: [
            { 
                email: "rwilson@us.ibm.com",
                type: "participant",
                rating: 5
            },
            { 
                email: "Kami.Haynes@ibm.com",
                type: "participant",
                rating: 4
            },
            { 
                email: "schouten@us.ibm.com",
                type: "participant",
                rating: 3
            },
            { 
                email: "theresac@us.ibm.com",
                type: "leader",
                rating: 2
            }            
        ],
        chapterSIG: ["A","B","C"] 
    }
]

const y = x.map(i => ({collaborators: i.collaborators.map(j => {if (j.email.toLowerCase() !== "rwilson@us.ibm.com") delete j.rating; return j}), ...i}))
console.log(JSON.stringify(y))
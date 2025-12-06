let x = [
    { title: "A",
      collaborators: [
        {
            email: "1@gmail.com",
            name: "1"
        },
        {
            email: "2@gmail.com",
            name: "2"
        }
      ]
    }
]

// WORKS
x = x.map( i => (
    { ...i,
      collaborators: i.collaborators.filter( j => j.email === "1@gmail.com")
    })
)

//DOESN'T WORK
// x = x.map( i => (
//     { collaborators: i.collaborators.filter( j => j.email === "1@gmail.com"),
//     ...i
//     })
// )

console.log(JSON.stringify(x))
let details = [ 
  {
    primary: true,
    id: "AI"
  },
  {
    id: "Data"
  }
]

console.log(details.filter(i => i.primary).map(i => i.id).toString())
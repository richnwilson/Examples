const x = "collaborators.$[a].email"

console.log(x.replace(/^(.*)\.\$\[.*/, "$1"))
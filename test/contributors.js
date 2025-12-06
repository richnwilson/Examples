const link = '<https://github.ibm.com/api/v3/repositories/1227258/contributors?per_page=1&page=2>; rel="next", <https://github.ibm.com/api/v3/repositories/1227258/contributors?per_page=1&page=3>; rel="last"'

const x = link.replace(/^.*page=([0-9+])>;\s*rel="last"$/, "$1")

console.log(x)
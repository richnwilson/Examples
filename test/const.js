const DIV = ' - DEV';
const url = 'https://ssdfsdfs-DEV/11'

const re = new RegExp(DIV,'g')
console.log(url.match(re) === null)
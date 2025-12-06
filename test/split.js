const { suppressDeprecationWarnings } = require("moment-timezone");

const y = "  andy.m.ramos@ibm.com,,rwilson@us.ibm.co, msomebody@redhat.com  ";
console.log(y.trim().split(','))
console.log(y.trim().split(',').filter(i => i !== '').map(i => i.trim()))

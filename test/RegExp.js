const x = "Andy.M.Ramos@ibm.com - 2019-08-23T13:43:54.766Z";
let name = x.replace(/(.*) - .*/i,'$1').trim().toLowerCase();
console.log(name);

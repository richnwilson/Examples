const x = [{id:"1", statCode: "0"}, {id:"2", statCode: "2"},{id:"3", statCode: "1"},{id:"4"},{id:"5", statCode: "50"}];
console.log(x.filter(i=>["0","1","50"].includes(i.statCode)));
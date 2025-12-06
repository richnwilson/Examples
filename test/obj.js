const x = [{yes: 'Yes', no: 'No'}];

console.log(Object.keys(x[0]).map(e => ({id: e, text: x[0][e]})))
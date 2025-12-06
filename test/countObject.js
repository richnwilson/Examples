const x = [
    {02042022: 10},
    {03042022: 12}
];

console.log(x.map(i => ({date: Object.keys(i)[0], value: Object.values(i)[0]})))
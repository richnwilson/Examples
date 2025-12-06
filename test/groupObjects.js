const x = [
    {
    name: "b",
    kill: 1,
    deaths: 2},
    {
    name: "b",
    kill: 1,
    deaths: 2},
    {
    name: "c",
    kill: 1,
    deaths: 2},
    {
    name: "b",
    kill: 1,
    deaths: 2}        
];

const y = x.reduce((acc,cur) => {
    const newCur = acc.filter(i => i.name == cur.name);
    if (newCur.length == 0) {
        acc.push(cur)
        return acc
    } else {
        newCur[0].kill += cur.kill;
        newCur[0].deaths += cur.deaths;
        acc = [ ...acc.filter(i => i.name !== cur.name), ...newCur];
        return acc
    }
},[])

console.log(y)
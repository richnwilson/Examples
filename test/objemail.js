const y = [{
    type: "Affiliate",
    title: "a",
    ec: ["rwilson@us.ibm.com", "schouten@us.ibm.com"] 
},{
    type: "Academy",
    title: "b",
    ec: ["rwilson@us.ibm.com"]
}]

const z = y.reduce((prev, curr) => {
    const type = curr.type === 'Affiliate' ? 'Affiliate' : 'Academy';
    for (const e of curr.ec) {
        const EClower = e.toLowerCase();
        if (!prev[EClower]) prev[EClower] = {"# Initiatives as EC": 0, "EC Titles": ''};
        prev[EClower][Object.keys(prev[EClower])[0]] += 1;
        prev[EClower][Object.keys(prev[EClower])[1]] += `${curr.title} | ${type})\n`;
    }
    return prev;
},{});

const z3 = y.reduce((prev, curr) => {
    const title = `${curr.title} | ${curr.type === 'Affiliate' ? 'Affiliate' : 'Academy'})\n`
    for (const e of curr.ec) {
        const EClower = e.toLowerCase();
        prev = {...prev, [EClower]: {"# Initiatives as EC": !prev[EClower] ? 1 : prev[EClower][Object.keys(prev[EClower])[0]] + 1 , "EC Titles": !prev[EClower] ? title : `${prev[EClower][Object.keys(prev[EClower])[1]]}${title}`}}
    }
    return prev;
},{});

const z2 = y.reduce((prev, curr) => {
    const type = curr.type === 'Affiliate' ? 'Affiliate' : 'Academy';
    const [ iniEC, titlesEC ] = ['# Initiatives as EC', 'EC Titles'];
    curr.ec?.map(e => e.toLowerCase()).forEach(email => !prev[email] ? prev[email] = {[iniEC]: 1, [titlesEC]: `${curr.title} | ${type})\n`} : (prev[email][iniEC] += 1, prev[email][titlesEC] += `${curr.title} | ${type})\n`) )
    return prev;
},{});

console.log(z);

console.log(z2);

console.log(z3);
// ----- Required output
// {
//     'rwilson@us.ibm.com': {
//       '# Initiatives as EC': 2,
//       'EC Titles': 'a | Affiliate)\nb | Academy)\n'
//     },
//     'schouten@us.ibm.com': { 
//        '# Initiatives as EC': 1, 
//        'EC Titles': 'a | Affiliate)\n' 
//      }
// }
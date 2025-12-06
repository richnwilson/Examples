const x = {internetAddress: 'rwilson1@us.ibm.com', rating: 'neither', comments: 'test',refType:'refType'};
const headers =     [
    {key: "comments", header: "Comments"},
    {key: "internetAddress", header: "Reference Email"},
    {key: "refType", header: "Reference Type"},
    {key: "association", header: "Association"},
    {key: "initiativeTitle", header: "Initiative"},
    {key: "initiativeRole", header: "Initiative Role"},
    {key: "rating", header: "Rating"}

];

console.log(Object.keys(x).sort((a,b) => headers.map(i=>i.key).indexOf(a) - headers.map(i=>i.key).indexOf(b)));

console.log(headers.map(i=>i.key));

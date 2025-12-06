const data = [
    {id: "1",a: "1", b: "1"},
    {id: "2",a: "2", b: "2"}
]

const i = data.findIndex(i=>i.id === '1');
data[i].mail = "1";

console.log(data);

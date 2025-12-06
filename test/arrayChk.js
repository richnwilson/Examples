const x = [{name: "t.doc", id: "123"},{name: "x.doc", id: "321"}];

x.unshift({pubId: "x"})
x.forEach((item, index) => {
    if (index > 0) {
        console.log(`${item.name} - ${item.id}`)
    }
})

console.log(x[0].pubId)

let gitChanges = {
    "new": false,
    "patch" : false,
    "postLabels": [],
    "deleteLabels" : []
};

const y = false;
gitChanges[!y ? "postLabels" : "deleteLabels"].push("add");

console.log(gitChanges);
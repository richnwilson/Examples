const x = {
    "templateFiles": {
      "entries": [
        {
          "name": "DIM-1",
          "type": "tree",
          "object": {
            "entries": [
              {
                "name": "data",
                "type": "tree"
              }
            ]
          }
        },
        {
          "name": "ISSUE_TEMPLATE",
          "type": "tree",
          "object": {
            "entries": [
              {
                "name": "data",
                "type": "blob"
              },
              {
                "name": "data1.md",
                "type": "blob"
              },
              {
                "name": "data2.md",
                "type": "blob"
              }
            ]
          }
        }
    ]
    }
}

const y = x.templateFiles?.entries.filter(i => i.name === 'ISSUE_TEMPLATE' && i.type === 'tree')[0]?.object?.entries.reduce((acc,cur) => { return cur.name.slice(-3) === ".md" && cur.type === 'blob' ? acc+=1 : acc},0) || 0
console.log(y)
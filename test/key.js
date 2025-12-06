let dbUpdateObj = { "$set": {}, "$push": {}, "$pull": {}}
const before = JSON.stringify(dbUpdateObj)

const after = JSON.stringify(dbUpdateObj)
console.log(before === after)

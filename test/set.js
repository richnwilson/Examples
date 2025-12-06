let data = {"$push" : {"title": "test4"}}
if ('$set' in data) {
    data.$set._lastUserAccessed = 'rwilson@gmail.com'
} else {
    data.$set = {'_lastUserAccessed': "rwilson@us.ibm.com"}
}
console.log(data)
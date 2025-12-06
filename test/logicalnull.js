const x = undefined
console.log(x?.findIndex(i => i === 'a'))
console.log(x?.findIndex(i => i === 'a')  ?? -1)
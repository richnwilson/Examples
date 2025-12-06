const x = ['a,b']
console.log(convert(x));
function convert(x) {
    let y = [];
    if (typeof x === 'string') {
        y.push(x)
    } else {
        y = x
    }
    if (y.length === 0) { return y}
    if (y[0].indexOf(',') > -1) {
         y  = y[0].split(',')
    }
    return y;
}
const x = '_1_dateFinished';
const y = x.replace(/^_[0-9]_/,'');
console.log(y.replace(/[A-Z]/g, i => ` ${i}`));
console.log(y.charAt(0).toUpperCase() + y.slice(1));

console.log(x.replace(/^_[0-9]_/,'').replace(/[A-Z]/g, i => ` ${i}`).replace(/^[a-z]/, i => i.toUpperCase()));
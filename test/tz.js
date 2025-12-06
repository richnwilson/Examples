import moment from 'moment-timezone';

const now = new Date();

console.log(moment(now).tz('Etc/UTC').format())
console.log(moment(now).tz('Etc/UTC').endOf('day').format())

console.log(moment(now).tz('Etc/UTC').startOf('day').format())

console.log(moment.tz.guess())
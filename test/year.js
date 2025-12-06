import moment from "moment-timezone"
const [start, end] = [2023, moment().year()];
console.log(new Array(end - start + 1).fill(0).map((_, i) => start + i).join(','))
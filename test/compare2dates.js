const moment = require("moment");

const a = "2021-06";
const b = "2021-07-16T00:00:00.000+00:00";

const c = moment(b).format("YYYY-MM") > moment(a).format("YYYY-MM") ? "b" : "a";
console.log(c);
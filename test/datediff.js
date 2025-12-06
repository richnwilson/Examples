const moment = require("moment");
console.log(moment(new Date("2023-06-14T20:05:25.760+00:00")).diff(moment(), 'days'))
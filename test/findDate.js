const x = "Added - Jan 16, 2024";
const sentDate = x.split(" - ")[1];

import moment from "moment";
console.log(moment(sentDate, "MMM DD, YYYY").add(2, 'weeks').format("MMM DD, YYYY"))

console.log(moment("dsfsdfdsf","MMM DD, YYYY").isValid())
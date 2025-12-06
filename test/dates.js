const exportMonthOnly = "2021/01/15";
const customExport =  typeof exportMonthOnly === 'undefined';
const date = customExport ? new Date() : new Date(exportMonthOnly);
console.log(date);
const firstDay = new Date(date.getFullYear(), date.getMonth() + (customExport ? 0 : -1), 1).toISOString().split("T")[0];
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + (customExport ? 0 : -1), 0).toISOString().split("T")[0];


console.log(firstDay);
console.log(lastDay);

const x = new Date(lastDay);
console.log(new Date(x.setDate(x.getDate() + 1)))

const y = new Date(Date.now() + (1000 * 60 * 60 * 24 * 1));
console.log( y);
import * as XLSX from 'xlsx'

const rows = [ 
    ["name", "score"],
    ["rich",{c: [{a: "8", t: "Participant: 5\nLeader: 2\nNot Rated: 1"}]}, hidden: true]
]

const ws = XLSX.utils.aoa_to_sheet(rows);
// ws.C2.c = [{a: "8", t: "Participant: 5\nLeader: 2\nNot Rated: 1"}]
// ws.C2.c.hidden = true
const wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb,ws,'OIC Data')
XLSX.writeFile(wb,"test.xlsx")   
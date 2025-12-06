const fs = require('fs');
let rawdata = fs.readFileSync('channels.json');
let channels = JSON.parse(rawdata);
for (const channel in channels.channels) {
    const i = channels.channels[channel];
    console.log(`${i.name} (${i.is_private ? "Private" : "Public"})`)
}
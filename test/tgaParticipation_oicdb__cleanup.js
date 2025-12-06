import myData from './tgaParticipation_oicdb.json' assert { type: 'json' };
import {writeFileSync} from 'fs';

for (const rec of myData) {
    let prev = null
    let i = 0
    for (const month of rec.data) {
        let curr = Object.keys(month).toString()
        if (prev === curr) rec.data.splice(i, 1);
        i++
        prev = curr
    }
}

 writeFileSync('./tgaParticipation_oicdb__new.json', JSON.stringify(myData, null, 2)); 
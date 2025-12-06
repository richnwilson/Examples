import axios from 'axios';
import fs from 'fs';

(async () => {
    try {  

        //
        const LIMIT = 1000
        const URL = "https://api.ibm.com/workforce/bluerun/discreteskills"
        const HEADERS = {
            "Accept": 'application/json',
            "X-IBM-Client-Id": 'd11b9358b0e335ef71188af99dcda545'
        }
        const SKILLPREFIX = [
            "Apply"
        ]
        //

        const arrayRange = (start, stop, step) => {
            return Array.from(
                { length: (stop - start) / step + 1 },
                (value, index) => start + index * step
            );
        }
        let totalCount = 0
        try {
            ({ data: { totalCount }}  = await axios.get(URL, { timeout:  5000, params: {limit: 1,offset: 0},headers: HEADERS}))
        } catch(e) {
            if (e?.code === 'ECONNABORTED') throw Error('Connection issue')
        }
        let ITER = arrayRange(0, totalCount, LIMIT)
        let taxonomy = []
        const result = await Promise.all(await ITER.map( async (i) => {
            try {
                const { data: { data }}  = await axios.get(URL, { params: {limit: LIMIT,offset: i},headers: HEADERS})
                taxonomy = [ ...taxonomy, ...data.map(i => i.title).filter(i => SKILLPREFIX.some(j => i.startsWith(j)))]
            } catch(e) {   
            }
        }))    
        fs.writeFileSync('taxonomy.json', JSON.stringify(taxonomy.sort(),null,2))
    } catch(e) {
        console.log(e)
    }
})();
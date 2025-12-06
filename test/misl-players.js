import axios from 'axios'
import fs from 'fs';

(async () => {
    try {
        const { data } = await axios.get('https://www.theleeg.com/api/participants?filter=%7B%22participant_type%22:%22players%22%7D')
        const playerDetails = data.filter(i => i.is_player && i.status==='waived' && i?.user_birthdate !== null).map(i => ({birthdate: i.user_birthdate, name: `${i.user_first_name} ${i.user_last_name}`, email: i.user_email}))
        const playerDetails55AndOver = playerDetails.reduce((arr,{ birthdate, name = '', email = '' }) => {
            if (birthdate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                if (birthdate.split('/')[2] <= 1969 && arr.filter(i => i.email === email).length ===0 ) {
                    arr.push({birthdate, name, email})
                    return arr
                }
                return arr
            }
            return arr
        },[])
        fs.writeFileSync('misl55plus.csv', playerDetails55AndOver.map(i => `${i.name},${i.email},${i.birthdate}`).join('\n'))
    }
    catch(e) {
    console.log(e)
}
})();  
import axios from 'axios'

(async () => {
    try {

        // Get token
        const data = await axios.get('https://api.yourlearning.ibm.com/v3/ibm/token/validate', {
            "functionalId" : "IBMOPENINNOVATIONCOMMUNITY",
            "privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8t2VPCw3yNUN8e5isB8JYnhz12bmHXgkZ0S5d8l9Y0MEcwB+zeMaVmk2YWUIw7nDG9gzUdfmCUxmCOFKhHWTYzU2XAvDsSqzEN4aVrXU+XP0ou9KqKQts4AwLhm3U/rhQfABM7+9X+MdSSB8vMUgZO3IzqmcDTFXY5E32m2SUvY0Gduz8Stj6EGqoNifShPDG7DqX5vAu8LpRxU3rsgL4tRxqKP1lxV8gk6jjgmREAP63621abGga2+I2tRdZ4vg6F9kZTHjxjbKJEEhpSYM17xLqydPqC7Qg8Q3A1rfCHv9QfQeaCuG7ux7czvQVQbZVs7VUL6+ACsBqwe7bZiWdAgMBAAECggEAK7c6JyjS5rgy9Wu2LqevfBLId6UjhrmgVxQvbwDd2HenPG8/CLaiHfa8Id4PaMFba6OEzlSz4143qwQ8E+l4uoY4gpJiWAJmah/Is/SWE8e7t0tnHhba+DIgaC0QVUZaUP6gnTH5mkHdfnCJlMeQQZQVPOWs7kUpH9CnRMizcIbghYQGBmto6DypcwQB3ssqnDiXMNRgYPjxi0PMnwd6nBl007eT3JbQHNneE/fldQJis+Aab5sUIfZWwGgTBR30XlyBWPsZGncLok/raOWGWJbUvj10OVD/n25MSd+NTR48+blyB1qtehGpq1sTw3QuiMiKlFBXXBsMZ1PJgUgimwKBgQDdtvh7zzLgmD79snqzTOfQ6hUY7qnQZ5/EE8aLc5K5K5TryOBmxT6RrgRvwBjRoEFHFW89NGqzvfXM2l6gFnvbPjZwv9JjWGLoMCoCVnj0gV8ps4UIFORYXM1gXHG7J6XhWCZYSD7dYXPbrE221lxzAZ25cCwnrISBv8zhbsTkpwKBgQDZ5h5br4kc68L6ydkVsJq7SZNcsKg9j37abqNXQEep26BhgwiaEHDeiPY4qRdgjymLKd64N8m97F3SRMIgZpH6b3wALCSDdzhc+GB9hVrtluOtzsJfcYrdqQI8Kke10/2qCB1sa6CDpyTxZ8jpbfF2m7m47n7I963uS08m/Ka4GwKBgQC8E7yR+mAkWcIFn+OqOfDkLc4byklPOrgysrvYDABJCAlaQprpUyUSm1W0HnZvTMxTKoGkn9RsCRZ74jom/yut/gZcerxT/eRZJpJcTVJpx10cmOaexmo18vNdbM4lfyqeEBLnDNIXJdYMYQvDr+/Yt2Q+rEMonJYDItr/2OE5PQKBgQCfuytB9tnCU6mpAlKarc2fwX2/Etkh15EcOsKOcVaXU6KsGMwzdB3pY+lq+7lhVVEU7OqRjIPdL+pO+4x7B/W26gaycamKndi5fnHtUdaoGFZq0Qh3wtoTR5OV20CaL/7hp/U5x2PxXpOcS4Jia+/4DIwG3v4eAEKGTrqFT+w/RQKBgHGP1JwzH4l5K66D3QP5vBJ4cKCRfZSHCZM032tlAIs0r6aPuNPfa//Dz5Q0CkCMr2PLzgX8zOLI2bI/LwVf/UOtyLtjJFc+MRkMio0Tjp8Yn39d0l/vBhaK0a9mtfiT1OyzKhkCdhQnhO39q/3IVwj3uc9hv7ZlY6VopbpircI9"
        });

        /*

        ----- Summary of all OIC badges for active users -----

        */

        const options =  {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params : {
                params : {
                'learnerIntranetID' : 'drip@br.ibm.com',
                'credentials': 'CREDLY-b1ace8a0-6931-4fec-9f52-582a19ba61b3,CREDLY-94a5d3fd-de25-4367-ac19-351ab472e74b,CREDLY-03643622-e371-4951-a53a-7cc11abad986,CREDLY-e0b4cd0b-1ac5-45e1-a7af-16296ac79295',
                'detail': 'full',
                'transcriptStatus': 'ISSUED_ACCEPTED',
                'limit': '10',
                'transcriptDateYear' : '2017,2018,2019,2020,2021,2022,2023,2024',
                'offset' : '0'                
            }
        }
        const { data : { data }} = await axios.get('https://yourlearning.ibm.com/api/v3/ibm/bestStatus', options)
        const newData = data.map(i => ({id: i.primaryObjectId, title: i?.transcript?.credentialTitle, date: i?.transcript?.issuanceDate, url: i?.transcript?.sourceUrl}))
        console.log(newData)

        }
        catch(e) {
        console.log(`${e?.response?.status ?? e} - ${e?.response?.statusText}`)
    }
})();
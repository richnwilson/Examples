import axios from 'axios'

(async () => {
    try {

        let options = {}

        // Get token
        const { data: { data: { token = '' } = {}} = {}} = await axios.post('https://api-internal.yourlearning.ibm.com/v3/ibm/functionalid/getTokenFromKey', {
            "functionalId" : "IBMOPENINNOVATIONCOMMUNITY",
            "privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8t2VPCw3yNUN8e5isB8JYnhz12bmHXgkZ0S5d8l9Y0MEcwB+zeMaVmk2YWUIw7nDG9gzUdfmCUxmCOFKhHWTYzU2XAvDsSqzEN4aVrXU+XP0ou9KqKQts4AwLhm3U/rhQfABM7+9X+MdSSB8vMUgZO3IzqmcDTFXY5E32m2SUvY0Gduz8Stj6EGqoNifShPDG7DqX5vAu8LpRxU3rsgL4tRxqKP1lxV8gk6jjgmREAP63621abGga2+I2tRdZ4vg6F9kZTHjxjbKJEEhpSYM17xLqydPqC7Qg8Q3A1rfCHv9QfQeaCuG7ux7czvQVQbZVs7VUL6+ACsBqwe7bZiWdAgMBAAECggEAK7c6JyjS5rgy9Wu2LqevfBLId6UjhrmgVxQvbwDd2HenPG8/CLaiHfa8Id4PaMFba6OEzlSz4143qwQ8E+l4uoY4gpJiWAJmah/Is/SWE8e7t0tnHhba+DIgaC0QVUZaUP6gnTH5mkHdfnCJlMeQQZQVPOWs7kUpH9CnRMizcIbghYQGBmto6DypcwQB3ssqnDiXMNRgYPjxi0PMnwd6nBl007eT3JbQHNneE/fldQJis+Aab5sUIfZWwGgTBR30XlyBWPsZGncLok/raOWGWJbUvj10OVD/n25MSd+NTR48+blyB1qtehGpq1sTw3QuiMiKlFBXXBsMZ1PJgUgimwKBgQDdtvh7zzLgmD79snqzTOfQ6hUY7qnQZ5/EE8aLc5K5K5TryOBmxT6RrgRvwBjRoEFHFW89NGqzvfXM2l6gFnvbPjZwv9JjWGLoMCoCVnj0gV8ps4UIFORYXM1gXHG7J6XhWCZYSD7dYXPbrE221lxzAZ25cCwnrISBv8zhbsTkpwKBgQDZ5h5br4kc68L6ydkVsJq7SZNcsKg9j37abqNXQEep26BhgwiaEHDeiPY4qRdgjymLKd64N8m97F3SRMIgZpH6b3wALCSDdzhc+GB9hVrtluOtzsJfcYrdqQI8Kke10/2qCB1sa6CDpyTxZ8jpbfF2m7m47n7I963uS08m/Ka4GwKBgQC8E7yR+mAkWcIFn+OqOfDkLc4byklPOrgysrvYDABJCAlaQprpUyUSm1W0HnZvTMxTKoGkn9RsCRZ74jom/yut/gZcerxT/eRZJpJcTVJpx10cmOaexmo18vNdbM4lfyqeEBLnDNIXJdYMYQvDr+/Yt2Q+rEMonJYDItr/2OE5PQKBgQCfuytB9tnCU6mpAlKarc2fwX2/Etkh15EcOsKOcVaXU6KsGMwzdB3pY+lq+7lhVVEU7OqRjIPdL+pO+4x7B/W26gaycamKndi5fnHtUdaoGFZq0Qh3wtoTR5OV20CaL/7hp/U5x2PxXpOcS4Jia+/4DIwG3v4eAEKGTrqFT+w/RQKBgHGP1JwzH4l5K66D3QP5vBJ4cKCRfZSHCZM032tlAIs0r6aPuNPfa//Dz5Q0CkCMr2PLzgX8zOLI2bI/LwVf/UOtyLtjJFc+MRkMio0Tjp8Yn39d0l/vBhaK0a9mtfiT1OyzKhkCdhQnhO39q/3IVwj3uc9hv7ZlY6VopbpircI9"
        });

        /*

        ----- Status check for individual IBMer -----

        */

        const IBMER = 'chloe.wang@ibm.com';

        options =  {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params : {
                'learnerIntranetID': IBMER,
                'detail': 'compact',
                'limit': 10,
                'offset': 0,
                'format': "json",
                'forLAIDs': 'PLAN-4DCB9D1F80D6'
            }
        }
        const data = await axios.get('https://api-internal.yourlearning.ibm.com/v3/ibm/transcriptsWithBestStatus', options)
        console.log(`${IBMER} completed the course ${data?.data?.totalCount} time(s)`)
        /*

        ----- Status check for completed IBMers over a given period -----

        options =  {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params : {
                'report': 'completions',
                'reportBy': 'YEARMONTH',
                'demographics': 'Current',
                'limit': '200',
                'filterBy_LEARNINGACTIVITY': 'PLAN-4DCB9D1F80D6',
                'filterBy_IS_ACTIVE': 'Y',
                'filterBy_IS_EMPLOYEE' : 'Y',
                'reportPeriodFrom': '202501',
                'reportPeriodTo': '202502'
           }
        }
        const { data : { data : { employees = {}}}} = await axios.get('https://api.yourlearning.ibm.com/v3/ibm/report/transcriptsCompletionDetail', options)
        const arrEmployee = Object.entries(employees).reduce((p, [k, v]) => [...p, Object.values(v)[0].learnerIntranetID],[])
        console.log(`The following employees completed the OIC Leader coruse this year: ${arrEmployee}`)
        */
        }
    catch(e) {
        console.log(`${e?.response?.status ?? e} - ${e?.response?.statusText}`)
    }
})();
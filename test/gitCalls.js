import axios from 'axios';

const headers = {
    'accept': 'applicaton/vnd.github.v3+json',    
    'Content-Type': 'application/json',
    'Authorization': 'token xxx' 
}

const gitAPI = async ({data = {}, params= {},url, method = 'get',errMsg = 'No specific error message', userId = '', _id, statusCode, checkBranch = false}) => {
    try {
        const gitData  = await axios ({url, params, method, data, responseType: 'json', headers})
        if (statusCode) return gitData.status
        if (gitData?.message === 'Not Found' && checkBranch) return { source: { branch: ''}}
        if (gitData?.message === 'Not Found') throw new Error ("No Git message found")
        if (gitData.status && ![200,201,204].includes(gitData.status)) throw new Error (gitData.message)
        return gitData
    } catch(e) {
        if (e?.response?.status === 404 && statusCode) return e?.response?.status
        console.log(e)
    }
}        

let hasMorePages = true;
let page = 1;
while (hasMorePages) {
    try {
        const { data = [] } = await gitAPI({
            url: `https://github.ibm.com/api/v3/orgs/oic/teams`,
            errMsg: `Could not find teams`,
            params: {
                per_page: 20,
                page
            },
            _id: '12'
        }) 
        const found = data.find(i => i.name === 'oic-i-test-squad-new-oic')?.slug
        if (found) console.log(found)
        if (data.length > 0) {
            page++
        } else {
            hasMorePages = false
        }
        console.log('')
    } catch(e) {
        console.log(e)
    }
}
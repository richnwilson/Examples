import axios from 'axios'

(async () => {
    try {
        const options =  {
            headers: {
                'X-IBM-Client-Id': '0cfa7b0f488d19c4bfbd84e6cae5b195',
                'X-IBM-Client-Secret': '38b471358bf68397c5d886010b61d1e5',
                'authorization':'IBMAoT:2QnZuNlFwaCIs'
            }
        }
        const data = await axios.post('https://w3-dev.api.ibm.com/w3search/test/push-to-search/push',
            {
                "collectionName": "w3",   
                "documentUri": "https://w3.ibm.com/ibm/academy/",   
                "title": "Open Innovation Community - Home",   
                "description":"Home page for the Open Innovation Community (OIC)",   
                "createdDate" : "2024-01-21",   
                "updatedDate" : "2024-02-06",   
                "scopes": ["oic"],   
                "language": "en",   
                "countries":  ["ZZ"],   
                "content": "PGI+T3BlbiBJbm5vdmF0aW9uIENvbW11bml0eTwvYj4=",   
                "charset": "utf-8",   
                "contentType": "text/plain",   
                "keywords": [ "OIC", "Open Innovation Community" ],   
                "classification": "public"
            },
            options
        )
        console.log(data);
        }
    catch(e) {
        console.log(e)
    }
})();
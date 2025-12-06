const axios = require("axios");

// Bot installed as rwilson - xxxx
// Bot installed as IBMOIC -  xxxx 
// ^^^ Need to add account to any channel we need to access
// ^^^ When create a channel automatically adds the owner of the bot as a user to that channel so can be used by API again

(async () => {
    try {    
        // const options = {
        //     params: {token: "xxxx", limit: 200, cursor:''}
                             
        // };
        // const {data: affiliateSlackJSON} = await axios.get(
        //     `https://slack.com/api/conversations.members`,
        //     options
        //     );
        // console.log(affiliateSlackJSON);    
        const options = {
            headers: {authorization: "Bearer xxxx"}
                             
        };
        const x = await axios.post(
            `https://slack.com/api/conversations.create`, {
                name: 'rich-test-1',
                is_private: false
            },
            options
            );    
        console.log(x)        
    } catch (e) {
        console.log(e)
    }
})();
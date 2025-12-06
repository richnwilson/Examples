import axios from 'axios';

(async () => {
    try {      
        
        const chunk = (arr, numInGroup) => { 
            return arr.reduce((arr, curr, index) => { 
                const idx = Math.floor(index/numInGroup)
                if(!arr[idx]) arr[idx] = []
                arr[idx].push(curr)
                return arr
          }, [])
        }

        const options = {
            headers: {authorization: "Bearer xxxxx"}
                             
        };

        const OLD_CHANNEL_ID = "C072LNHBNSC" // oic-sig-instructlab (1,052 members)
        const NEW_CHANNEL_ID = "C070DJSKRL4" // instructlab-at-ibm (1,328 members)
                                             // -----------------------------------
                                             // 2,380 max in new channel

        let cursor = ''
        let memberIds = []
        do {
            // Grab member Ids
            const { data: { members, response_metadata: { next_cursor = '' }}} = await axios.get(`https://slack.com/api/conversations.members?&channel=${OLD_CHANNEL_ID}&limit=500&pretty=1&cursor=${cursor}`,options);
            cursor = next_cursor
            memberIds = [...memberIds, ...members]
        } while (cursor !== '')

        // Remove the Functional Id if it exists
        memberIds = memberIds.filter(i => i !== 'U05QH5YMT4Z')

        // Post members Ids in new channel
        const chunkMembers = chunk(memberIds, 500)
        for (const chunkMember of chunkMembers) {
            const data = await axios.post(`https://slack.com/api/conversations.invite`, {channel: NEW_CHANNEL_ID, users: chunkMember}, options);
            const x = 1;
        }
    } catch (e) {
        console.log(e)
    }
})();


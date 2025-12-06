import { WebClient } from '@slack/web-api';

// Bot for IBMOIC@ibm.com - this user must be added to any channels that need to use this bot
const web = new WebClient('xxxx');

// Bot for IBMOIC@ibm.com - this user must be added to any channels that need to use this bot
const SLACK_API_TOKEN = 'xxxx';


(async () => {
    try {

        // Get channel name and private setting
        const { channel: { name, is_private }} = await web.conversations.info({channel: 'C07Q8STGC4S'})

        // Get all members
        let cursorId='';
        let memberList=[];
        do {
            let { members, response_metadata } = await web.conversations.members({channel: 'C05649JBZLK', cursor: cursorId, limit: 100});
            memberList = [ ...memberList, ...members]
            cursorId = response_metadata.next_cursor !== 'undefined' && response_metadata.next_cursor !== '' ? response_metadata.next_cursor : '';

        } while (cursorId !== '');

        const x = 1
        // const users = {
        //     usersAdded: [],
        //     usersNotAdded: []
        // }

        // const ids = [
        //     {email: "rwilson@us.ibm.com", slackId: "WA27K4DPH"},
        //     {email: "Kami.Haynes@ibm.com", slackId: "WBST6Q5S6"},
        //     {email: "dporton@au1.ibm.com", slackId: "WD77EG7NJ"},
        //     {email: "xxxx@ibm.com", slackId: "xxxx@ibm.com"}
        // ]
        
        // // Valid Slack Ids to try to add
        // const validEmails = ids.filter(i => i.slackId !== i.email)
        
        // // Probably not in our Org, so add to usersNotAdded (will attempt to add manually)
        // users.usersNotAdded = ids.filter(i => i.slackId === i.email).map(i => i.email)

        // await Promise.all(validEmails.map( async ({email, slackId: id}) => {
        //     try {
        //         const { ok = false } = await web.conversations.invite({users:id, channel: "C081QHJ9N8P"});
        //         if (ok) { 
        //             // New users that was successfully added
        //             users.usersAdded.push(email)
        //         } else {
        //             // Call was okay, but for some reason user not added. We add to usersNotAdded.
        //             users.usersNotAdded.push(email)
        //         }
        //     } catch(e) {
        //         switch(e?.data?.error) {
        //             case 'org_user_not_in_team':
        //                 // Not in our Org, but should still add manually
        //                 users.usersNotAdded.push(email)
        //                 break;
        //             case 'already_in_channel':
        //                 // Ignore as already in channel
        //                 break;
        //             default: 
        //                 // Unforseen error, so log ...
        //                 consoleLog(FILENAME, addNewCollaboratorsToChannel.name, undefined, `Error inviting user '${email} - ${id}' to slack channel: ${e}`, 'error');      
        //         }
        //     }
        // }))

        // console.log(users)

        // const { user } = await web.users.lookupByEmail({email: "rwilson@us.ibm.com"});

        // console.log(user);

        // // aot-members = GF6S82UPR
        // // aot-new-members = G4L2X77EJ
        // let allChannels = [];
        // let options = {limit: 100};

        // // response_metadata
        // // do {}
        // // while (response_metadata)
        // // const  { channels }  = await web.conversations.list({limit: 100});
        // // fs.writeFileSync("channels.json",JSON.stringify(channels,null, 2));

        // const { channel } = await web.conversations.info({channel: 'GF6S82UPR'})
        // console.log(channel);

        // while (true) {
        //     const slackurl = 'https://slack.com/api/conversations.members';
        //     const { data } = await axios.get(slackurl, { params: { token: SLACK_API_TOKEN, channel: 'C03B0A6V9', limit:200 }});
        //     console.log(data);            
        // }

        // const resp = await web.users.lookupByEmail({email: "rwilson1@us.ibm.com"});
        // console.log(resp.user.id);


        // const slackurl = 'https://slack.com/api/conversations.members';
        // const { data } = await axios.get(slackurl, { params: { token: SLACK_API_TOKEN, channel: 'C03B0A6V9', limit:200 }});
        // console.log(data);
        // const user = await web.users.lookupByEmail({email: 'rwilson@us.ibm.com'});
        // console.log(user);
        //const data = await web.admin.users.assign({team_id: 'T4KU7QY0N', user_id: 'WD77EG7NJ'});
        // console.log(data);

        // List all archives and private channel in workspace

        // let cursor = ''
        // let allChannels = []
        // do {
        //     const { channels, response_metadata: { next_cursor }} = await web.conversations.list({cursor, exclude_archived: true, limit: 999, types: 'private_channel, public_channel'})
        //     // Rate limit is 20 per minute ?
        //     cursor = next_cursor
        //     allChannels = [...allChannels, ...channels.map(i => i.name)]
        // } while (cursor !== '')
        // console.log(allChannels)
    } catch(e) {
        console.log(`Error - ${JSON.stringify(e?.data?.error ?? e)}`);
    }
})();



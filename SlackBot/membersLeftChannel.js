const requestPromise = require('request-promise');
const request = require('request');
const fs = require('fs');
const { WebClient } = require('@slack/client');
const token = 'xxxx';
const web = new WebClient(token);

var memberIds= [];
const channelId = 'CU6UDHRAT'; // aot-latest-buzz 
var isCursor='';
var URL;
const numberInBatch = 25;

function getMemberIds(channelId,memberIds,isCursor) {
    return new Promise((resolve,reject) => {
        URL = `https://slack.com/api/conversations.history?token=${token}&channel=${channelId}&limit=500&pretty=1`;
        if (isCursor.length>0) { 
            URL += `&cursor=${isCursor}`
            console.log(`Running Channel query with next cursor - ${isCursor}`)
        }
        request(URL, { json: true }, (err, res, body) => {
            if (err) { reject(err); }
            console.log(body.messages.filter(item => { item.subtype === 'channel_leave'}));
            isCursor='';
            if (body.has_more) {
                isCursor = body.response_metadata.next_cursor || null;
            }
            if (isCursor.length>0) {
                return resolve(getMemberIds(channelId,memberIds,isCursor))           
            } else {
                return resolve([].concat(...memberIds));
            }
          }); 
    })
}

async function getAllMemberIds () {
    return await getMemberIds(channelId,memberIds,isCursor);
}

getAllMemberIds()
    .then((res)=> {
        // (async () => {
        //     const list = [];
        //     const chunks = chunkArray(res, numberInBatch);
        //     for (let i=0; i<chunks.length; i++){
        //         await Promise.all(chunks[i].map(async (id)=>{
        //             try{
        //                 const userId = await web.users.info({user: id});
        //                 list.push(userId.user.profile.email);
        //             }catch(error){
        //                 list.push(`No email for Id: ${id}`);
        //             }
        //         }));
        //         // We just made 50 requests. Need to wait before next request
        //         // Waiting 10 seconds. API says should make 50 per minute; maybe need to change?
        //         if (i < chunks.length - 1){
        //             await delay(10000);
        //         }
        //         console.log(`Running Slack ID query (batch of ${numberInBatch} ids) - ${i+1} of ${chunks.length}`);
        //     }
        //     fs.writeFile(`${channelId}.txt`, list.join('\r\n'), function(err) {
        //         if (err) console.log(`Error creating ${channel}.txt - ${err}`);
        //         }); 
        //  })();
        console.log(res);
    })
    .catch((err)=> {console.log(`Error running JS - ${err}`)})

    function chunkArray(array, chunkSize) {
        return Array.from(
            { length: Math.ceil(array.length / chunkSize) },
            (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)   
        );
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
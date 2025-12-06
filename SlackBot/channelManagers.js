const requestPromise = require('request-promise');
const request = require('request');
const fs = require('fs');
const { WebClient } = require('@slack/client');
const web = new WebClient('xxxxx');

let cursorId = '';
let count=0;
let matchObj={};
(async () => {
    try {    
        do {
            let { channels, response_metadata } = await web.conversations.list({team_id: "T4KU7QY0N",cursor: cursorId, exclude_archived: true, types: 'public_channel,private_channel', limit: 500});
            const x = channels.filter(i=>i.name === 'aot-members')
            if (x.length > 0) {
                console.log(x)    
            };
            cursorId = response_metadata.next_cursor !== 'undefined' && response_metadata.next_cursor !== '' ? response_metadata.next_cursor : '';
        } while (cursorId !== '');
        console.log(matchObj.id);
    } catch (e) {
        console.log(e)
    }
})();
const requestPromise = require('request-promise');
const request = require('request');
const fs = require('fs');
const { WebClient } = require('@slack/client');
const web = new WebClient('xxxx');

let cursorId = '';
let count=0;
let matchObj={};
(async () => {
    try {    
        do {
            let { channels, response_metadata } = await web.conversations.list({cursor: cursorId, exclude_archived: true, types: 'public_channel,private_channel', limit: 500});
            ( [ matchObj ] = channels.filter(i=>i.name === 'a-ww-datascientists'));
            if ('id' in matchObj) break;
            cursorId = response_metadata.next_cursor !== 'undefined' && response_metadata.next_cursor !== '' ? response_metadata.next_cursor : '';
        } while (cursorId !== '');
        console.log(matchObj.id);
    } catch (e) {
        console.log(e)
    }
})();
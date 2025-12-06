const requestPromise = require('request-promise');
const request = require('request');
const fs = require('fs');
const { WebClient } = require('@slack/client');
const web = new WebClient('xxxx');

(async () => {
    try {    
        const { channel: { name = ""} = {} } = await web.conversations.info({channel: "C05xx48BZKZ6V"});
        console.log(name);
    } catch (e) {
        console.log(e)
    }
})();
const request = require('request');

var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        var req = request({url, json:true}, (err, response, body) => {
            if (err) return reject(err, response, body);
            resolve(body.channel.members);
        });
    });
};
// Bot for IBMOIC@ibm.com - this user must be added to any channels that need to use this bot
const urls = [
    'https://slack.com/api/channels.info?token=xxxx&channel=CDMGJ9QG2',
    'https://slack.com/api/channels.info?token=xxxx&channel=C4JHPRQLR',
    'https://slack.com/api/channels.info?token=xxxx&channel=C4ME3EW3D'
];

const getParallel = async function() {
    try {
        var data = await Promise.all(urls.map(requestAsync));
    } catch (err) {
        console.error(err);
    }
    data.forEach(e =>{
        console.log(e)
    })
}

getParallel();
const slackBot = require('slackbots');
const axios = require('axios');

const regex = /\<.*>(.*)/

const membersQuery = {
    "list-core-leaders" : "[isCoreTeamLeader]=%22Yes%22"
};

const bot = new slackBot({
    token: 'xxxx',
    name: 'aotbot'
});

const params = {
    icon_emoji: ':ibmaot:'
}

// Start Handler
bot.on('start', () => {
    // Need to manually invite bot to a channel, other than #general. 
    // To do so, go to into channel in Slack and type @aotbot and then click Invite
    //bot.postMessageToGroup('aot-members', 'Get ready for the first IBM AoT bot', params);
});

bot.on('error', (err) => {
    console.log(err);
});

// Show example of writing something to Box
// Show example of returning leads for core/focal

bot.on('message',  (data) => {
    if (data.type === 'message' && data.text) {
    }
});

async function handleMessage(message) {
    const match = regex.exec(message)[1].trim();
    switch(match) {
        case "list-core-leaders":
            const data = await getMemberDetails(match);
            return formattedFields(["notesId","internetAddress","coreTeam"],data);
        default:
            return;
    }
};

function getMemberDetails(val) {
    try {
        return axios.get('https://aotapi-prod.w3ibm.mybluemix.net/api/Members?filter[where]' + membersQuery[val]);
    } catch(err) {
        console.log(err);
    }
};

function formattedFields(fields,data) {
    let memberDetails="";
    for (item in data.data) {
        let member = data.data[item];
        for (field in fields) {
            memberDetails += member[fields[field]];
            if (field < fields.length-1) { memberDetails += " | ";}
        }
        memberDetails += "\n";
    }
    return memberDetails;
}
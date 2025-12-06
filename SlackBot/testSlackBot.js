const { WebClient } = require('@slack/web-api');
const SLACK_CHANNEL_TO_TEST = "C0698NMR5LY"
const SLACK_BOT_TOKEN = "xxxx"
const web = new WebClient(SLACK_BOT_TOKEN);


(async () => {
    try {
        const objData = {
            "channel": SLACK_CHANNEL_TO_TEST,
            "text":"Updates:",
            "attachments":[
                {"color":"#FF0000",
                 "blocks":[
                    {
                        "type":"section",
                        "text":
                        {
                            "type":"mrkdwn",
                            "text":":lightbulb: *Testing new slackbot* (:eye:)"
                        }
                    },{
                        "type":"divider"
                    },{
                        "type":"section",
                        "text":
                        {
                            "type":"mrkdwn",
                            "text":"test"
                        }
                    }
                    ]
                }
            ],
            "blocks":[]
        }
        const response = await web.chat.postMessage(objData);
    } catch(e) {
        console.log(e)
    }
})();
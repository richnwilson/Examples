const { WebClient } = require('@slack/web-api');
// Old token
const web = new WebClient("xxxx");
// New token
//const web = new WebClient("xxxx");

(async () => {
    try {
        const objData = {"channel":"C0341MQR1UK","ts":"1669739154.515509","text":null,"attachments":[{"color":"#FF0000","blocks":[{"type":"section","text":{"type":"mrkdwn","text":":lightbulb: *Testing new slack in DEV* (:eye:)"}},{"type":"divider"},{"type":"section","text":{"type":"mrkdwn","text":"Current Status: :red-circle-emoji: *Deleted*"}},{"type":"section","text":{"type":"mrkdwn","text":":attention-please: _Please reply in thread with comments._\n_        Only text comments will be replicated in Idea comments - attachments will be ignored._"}},{"type":"divider"},{"type":"section","fields":[{"type":"mrkdwn","text":"*Created by:*\nrwilson@us.ibm.com"},{"type":"mrkdwn","text":"*Created on:*\nTue, Nov 29, 2022"}]},{"type":"section","fields":[{"type":"mrkdwn","text":"*Problem:*\nx"},{"type":"mrkdwn","text":"*Outcome:*\nx"}]},{"type":"section","fields":[{"type":"mrkdwn","text":"*Industry:*\nNot assigned"},{"type":"mrkdwn","text":"*Focus Area:*\nTopic Focus"}]},{"type":"section","fields":[{"type":"mrkdwn","text":"*Potential Leader:*\nNot assigned"},{"type":"mrkdwn","text":"*Potential Executive Champion:*\nvictor_brown@us.ibm.com"}]},{"type":"section","text":{"type":"mrkdwn","text":"*AUDIT TRAIL:*"}},{"type":"section","text":{"type":"mrkdwn","text":"> Tue, Jan 24, 2023 | Admin | Set to 'Under Review'"}},{"type":"section","text":{"type":"mrkdwn","text":"<https://127.0.0.1:9443/ideas/63863291069517001f72902d|View Complete Idea>"}},{"type":"section","text":{"type":"mrkdwn","text":"_Last Updated: Thu, Sep 28, 2023_"}}]}],"blocks":[]}
        const response = await web.chat.update(objData);
    } catch(e) {
        console.log(e)
    }
})();
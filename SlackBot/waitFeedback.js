const { App } = require('@slack/bolt');
const axios = require('axios');

/* TO DO
    1. Setup up calendar in workflow builder to remind people how to use feedback
    2. Add to OIC slack channel only
    3. First field in form has to be title of enhancement
    3. Notify slack user once  git issue created and share link
    4. Add users:read and users:read.email to PROD bot and approve
*/

// ibm-aotbot-dev
const slackApp = new App({
    signingSecret: "26cf70d0baf5a8401d1ec94bedadc9a5",
    token: "xxxxx",
    socketMode: true,
    appToken: "xxxx"
  });


// Listen for new message to appear in slack channel
slackApp.message( async ({ event, client, say }) => {
    try {
        if (event.channel === 'C0543DN359S' && event?.subtype === 'bot_message') {
            // Git URL call options
            const options = {
                headers: {
                    'accept': 'applicaton/vnd.github.v3+json',    
                    'Content-Type': 'application/json',
                    'Authorization': 'token xxxxx',
                }
            }
            const formData = event.blocks.filter(i=>i.type === 'section').map(i => i.text.text.replace(/\s?\*/g,'**'));
            if (formData.length === 0) throw ({message: 'No form data found',  custom: true});
            const slackId = formData[0].replace(/^.*\<\@(.*)\>.*/,'$1');
            const slackUser = await client.users.info({user: slackId});
            formData.shift();
            if (!slackUser.ok || slackUser.user.profile.email === 'undefined') throw ({message: 'No submitter info found', custom: true})
            const { data: gitData } = await axios.get( `https://github.ibm.com/api/v3/search/users?q=${slackUser.user.profile.email} in:email`, options);
            if (gitData.total_count === 0) throw ({message: 'No git record found', custom: true});
            const gitId = gitData?.items.filter(i => i.type.toLowerCase() === 'user')[0].login;
            formData.push(`\n\n_Submitted by @${gitId}_`)
            const { data: { html_url }} = await axios.post(`https://github.ibm.com/api/v3/repos/IBMAoT/aot-oic-tool-enhancements/issues`, {
                owner: "ibmaot-us",
                title: formData[0].replace(/^.*\n(.*)\n\n/,"$1"),
                labels: ["feedback"],
                body: formData.join('')
            }, options)
            await say(`^^^ Successfully migrated to git issue - ${html_url}`)
            await client.chat.postMessage({channel: slackId,text: `Thank you for submitting your enhancement. The git issue related to this is: ${html_url}`})
        }
    } catch(e) {
        await say(`Error submitting form: ${e?.custom ? e.message : e}`)
    }
});
(async () => {
    try {
        await slackApp.start(process.env.PORT || 3000);
        console.log(`Slack connected on port ${process.env.PORT || 3000}`)
    } catch(error) {
        console.error('[aotbot:start] An error occurred while starting AoTBot', error);
    }
})();
const { App } = require('@slack/bolt');
const { WebClient } = require('@slack/web-api');
const moment = require('moment');

// Bot for IBMOIC@ibm.com - this user must be added to any channels that need to use this bot
const web = new WebClient("xxxx");
const app = new App({
  signingSecret: "xxxx",
  token: "xxxx",
  socketMode: true,
  appToken: "xxxx"
});

app.event('message',async ({ message, say }) => {
  try {
    console.log(message);
    // Switch for channel id - based on Profile value in deployment
    if (message.channel === 'G4L1TUXTR' && typeof message.thread_ts !== 'undefined') {
      // Time of thread message
      const time = moment(new Date(message.event_ts * 1000)).local().format('MMMM D, YYYY h:mm A');
      // Message text (remove special characters)
      const text = message.text.replace(/\:\S+\:/g,' ').replace(/\*(.*)\*/g,'$1').replace(/_(.*)_/g,'$1').replace(/~.*~/g,' ').replace(/\`{1,3}([^`]{1,})\`{1,3}/g,'$1').replace(/&gt;/g,'>').trim();
      // Email of User Id
      const { user } = await web.users.info({user: message.user});
      console.log(`${user.real_name} [${message.user}] - ${time} - '${text}'`);
    }
    // Look for Idea document in Mongo based on thread_ts matching ts from parent i.e. 1633960800.003900 and update

  } catch(e) {
    console.log(e)
  }
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
})();



//TO DO
//1. To add Slack bots to channel, you need to type @ followed by name of bot as message in the channel. Once entered, you can invite
//2. To  remove a bot from a channel, you type `/remove @ followed by name of bot
//3. Add link to user https://ibmaot.slack.com/team/WA27K4DPH
//3. Add a link in the Shared button for Slack i.e. https://ibmaot.slack.com/archives/{channel name}/p{ts with no period) i.e. https://ibmaot.slack.com/archives/G4L1TUXTR/p1633969080015400
//4. (Optional) Link to threaded message i.e. https://ibmaot.slack.com/archives/G4L1TUXTR/p1633979224017600?thread_ts=1633978633.016900&cid=G4L1TUXTR. Doesn't seem to work well.
//5. Document how to create this bot type
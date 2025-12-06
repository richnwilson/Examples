// Added ibmaot@us.ibm.com as collaborator to my AoTBot app
// Logged into Slack API as ibmaot@us.ibm.com and 'install App' to take ownership

// Need to go to 'OAuth & Permissions for AoTBot bot and in the Scopes section, add 'reminders:read' and 'reminders:write'
// Need to reinstall the bot for changes to take effect

// Use reminders.add to add a reminder to squad and optional initiative slack channel
// Return reminder ID and add to initiative as array of objects in slackReminders i.e.
//  [ { ExecutiveChampion: ID12345}, {NoMoreEndDates: IDFfsdfsd}]

// If the event that triggered the reminder is resolved, then
//  - we remove the object from the slackReminders array
//  - we use reminders.delete to remove reminder from slack

// CURRENT ISSUES
// - using undocumented 'channel' parameter doesn't return a reminder.id that can be used to delete the reminder

const { WebClient } = require('@slack/client');
const { WebClient: WebApi } = require('@slack/web-api');
// Bot for IBMOIC@ibm.com - this user must be added to any channels that need to use this bot
const web = new WebApi('xxxx');
const webBot = new WebClient('xxxx');
const webUser = new WebClient('xxxx');

const email = 'rwilson@us.ibm.com';

(async () => {
    try {
       const {user} = await webBot.users.lookupByEmail({email});
        console.log(user.id)
        // const update = await web.chat.update({
        //     channel: "C0341MQR1UK",
        //     ts: "1645544016.391169",
        //     text: "new message",
        //     blocks: [
        //         {
        //             "type": "section",
        //             "text": {
        //                 "type": "mrkdwn",
        //                 "text": "New message"
        //             }
        //         }
        //     ]
        // })
        // console.log(update);
    
        // Need to use AoTBot User credentials
        // WORKS FOR USER
        //const data = await webUser.reminders.add({text: "Added by ibmaot - please ignore", time:" in 2 weeks", user: userId});
    
        // PARTIALLY WORKS FOR CHANNEL - no reminder array returned
        // const data = await webUser.reminders.add({text: "Added by ibmaot - please ignore", time:" in 2 weeks", channel: "G4L1Q5BQX"});
        // console.log(data);
        //const reminderId = reminder.id;
    
        //const data = await webUser.reminders.delete({reminder: reminderId})
        //console.log(data);
    } catch(e) {
        console.log(e)
    }

})();



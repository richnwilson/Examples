const slackChannel = 'http://ibmaot.slack.com/archives/CT96UPG4T';

const x  = slackChannel.match(/^https?:\/\/.*\/archives\/[A-Z0-9]+$/)
if (x !== null) {
    console.log("match")
}
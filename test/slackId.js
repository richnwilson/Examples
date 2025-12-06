const initiative = {
    focusAreas: [{
        name: "leadership",
        primary: false
    },
    {
        name: "ai",
        primary:  true
    }]
};

const vsFocusAreas = [
    {   id: "ai",
        slackChannel: 'yyyyy'
    },
    {
        id: "leadership",
        slackChannel: "xxxxx"
    }
]

console.log(vsFocusAreas.filter(i => i.id === initiative.focusAreas.filter(i => i.primary).map(i => i.name).toString()).map(i => i.slackChannel).toString())
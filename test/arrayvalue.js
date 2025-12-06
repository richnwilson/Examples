const data = [
    { attribute: [{
        name: "notesemail",
        value: [
        "CN=Richard Harran/OU=UK/O=IBM@IBM"
        ]
        },
        {
        name: "mail",
        value: [
        "RHARRAN@uk.ibm.com"
        ]
        }
        ]},
    { attribute: [{
        name: "notesemail",
        value: [
        "CN=Richard Sloat/OU=Atlanta/O=IBM@IBM"
        ]
        },
        {
        name: "mail",
        value: [
        "rsloat@us.ibm.com"
        ]
        }
        ]}];        

const newdata = data.map((i) => {
    return i.attribute.reduce((acc,curr) => {
        const key = curr["name"];
        if (key === 'notesemail') {
            acc["title"] = curr["value"][0].replace(/CN=(.*)\/OU=(.*)\/O=(.*)/, '$1 ($2)')
        }
        if (key === 'mail') {
            acc["email"] = curr["value"][0];
        }
        if (key === 'uid') {
            acc["uid"] = curr["value"][0];
        }
        return acc;
    },{})
})

console.log(newdata);
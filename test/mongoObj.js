const data = {
    "$set" : {
        "status": "draft"
    },
    "$push" : {
        "social.likes" : "rwilson@us.ibm.com"
    },
    "$pull" : {
        "social.follow": "theresac@us.ibm.com"
    }
}

let upsertSocial = false
if ("$push" in data) {
    if ("social.comments" in data.$push || "social.likes" in data.$push || "social.follow" in data.$push) upsertSocial = true
}
if ("$pull" in data) {
    if ("social.follow" in data.$pull || "social.likes" in data.$pull) upsertSocial = true
}

console.log(upsertSocial)

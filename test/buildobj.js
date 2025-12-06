let initiative = {
    _id: 1,
    collaboration: {
        slackId: 1
    }
}

if (!initiative?.collaboration?.privateBoxId) {
    initiative.collaboration = {
        ...initiative.collaboration ?? {},
        privateBoxId: "xxxx"
      };
}
// if (['', null, undefined].includes(initiative?.collaboration?.privateBoxId)) {
//     ('collaboration' in initiative) ? Object.assign(initiative.collaboration, { privateBoxId: "xxxx"}) : Object.assign(initiative, { collaboration : { privateBoxId: "xxxx"}}) 
// }

console.log(initiative)
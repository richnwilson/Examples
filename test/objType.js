const added = { collaborators: {
    "11": { type: 'participant', name: 'a', email: 'rwilson@us.ibm.com', talentId: '7D5656897'},
    "12": { type: 'ec', name: 'b', email: 'rwilson@us.ibm.com', talentId: '7D5656897'},
    "13": { type: 'leader', name: 'c', email: 'rwilson@us.ibm.com', talentId: '7D5656897'}
}}

const newParticipants = Object.keys(added.collaborators).reduce((acc,curr)  => {
    if (added.collaborators[curr].type === 'participant') {
        acc.push(added.collaborators[curr])
    }
    return acc
}, [])

console.log(newParticipants)
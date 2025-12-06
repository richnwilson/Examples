const collaborators = [
    {
        "type": "creator",
        "name": "Richard Wilson",
        "email": "rwilson1@us.ibm.com",
        "talentId": "7D5656897",
        "_id": {
        "$oid": "66e1d3c50b71242c6121f913"
        }
    },
    {
        "type": "participant",
        "name": "Salvador Octavio Briones Martinez",
        "email": "salvador.briones@ibm.com",
        "talentId": "103302781",
        "_id": {
        "$oid": "66e1d3c50b71242c6121f914"
        }
    },
    {
        "type": "leader",
        "name": "Antonio Olvera",
        "email": "antonio.olvera@ibm.com",
        "talentId": "7D5656897",
        "leaderIsPrimary": true,
        "leaderIsAware": true,
        "rating": 1,
        "_id": {
        "$oid": "66e1d3c50b71242c6121f915"
        }
    },
    {
        "type": "preApprovedSponsor",
        "name": "Gisela Orozco Robles",
        "email": "gisela.orozco@ibm.com",
        "talentId": "071047781",
        "message": "Great",
        "_id": {
        "$oid": "66e1d3c50b71242c6121f916"
        }
    },
    {
        "type": "sponsor",
        "name": "Gisela Orozco Robles",
        "email": "gisela.orozco@ibm.com",
        "talentId": "071047781",
        "message": "Yeah",
        "_id": {
        "$oid": "66e1d3c50b71242c6121f917"
        }
    },
    {
        "type": "ec",
        "name": "Kami Haynes",
        "email": "Kami.Haynes@ibm.com",
        "talentId": "071047781",
        "ecIsAware": true,
        "rating": 5,
        "message": "Awesome initiative",
        "_id": {
        "$oid": "66e1d3c50b71242c6121f918"
        }
    },
    {
        "type": "arb",
        "name": "Kami Haynes",
        "email": "Kami.Haynes@ibm.com",
        "talentId": "071047781",
        "rating": 4,
        "arbType": [
        "Technical",
        "General"
        ],
        "arbDateDue": {
        "$date": "2024-07-17T17:25:29.819Z"
        },
        "arbCompletedTask": true,
        "_id": {
        "$oid": "66e1d3c50b71242c6121f919"
        }
    },
    {
        "type": "leader",
        "name": "Rich Wilson",
        "email": "rwilson@us.ibm.com",
        "talentId": "7D5656897",
        "rating": 4,
        "_id": {
        "$oid": "66e1d3c50b71242c6121f920"
        }
    }
]

const chunk = (arr, numInGroup) => { 
    return arr.reduce((arr, curr, index) => { 
        const idx = Math.floor(index/numInGroup)
        if(!arr[idx]) arr[idx] = []
        arr[idx].push(curr)
        return arr
  }, [])
}

const collaboratorsGroups = chunk(collaborators, 2)
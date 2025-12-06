import { addedDiff, updatedDiff, diff, detailedDiff, deletedDiff} from "deep-object-diff";

const oldItem = {
    "closedUnsuccessfully": false,
    "collaborators": [
      {
        "type": "ec",
        "name": "Richard Wilson",
        "email": "rwilson@us.ibm.com",
        "talentId": "7D5656897",
        "ecIsAware": true,
        "rating": null
      } ,
      {
        "type": "ec",
        "name": "Kami Haynes",
        "email": "Kami.Haynes@ibm.com",
        "talentId": "071047781",
        "ecIsAware": true,
        "ecRatingDate": "2024-10-17T17:25:29.819Z",
        "ecRatedBySquad": true,
        "ecRatingSource": "email",
        "_id":"66e1d3c50b71242c6121f918",
        "message": "Not good enough",
        "rating": 1
      }  
    ]
}

const newItem = {
  "closedUnsuccessfully": false,
  "collaborators": [
    {
      "type": "ec",
      "name": "Richard Wilson",
      "email": "rwilson@us.ibm.com",
      "talentId": "7D5656897",
      "ecIsAware": true,
      "rating": null
    } ,
    {
      "type": "ec",
      "name": "Kami Haynes",
      "email": "Kami.Haynes@ibm.com",
      "talentId": "071047781",
      "ecIsAware": true,
      "ecRatingDate": "2024-10-17T17:25:29.819Z",
      "ecRatedBySquad": true,
      "ecRatingSource": "email",
      "_id":"66e1d3c50b71242c6121f918",
      "message": "Not good enough",
      "rating": 1
    }                         
  ]
}

const updated = updatedDiff(oldItem, newItem)

if (updated?.closedUnsuccessfully) {
  console.log("Here")
}
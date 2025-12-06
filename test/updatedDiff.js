import { updatedDiff } from "deep-object-diff";

const before = {
    interestedParticipants: [
        {
            "email": "rwilson@us.ibm.com",
            "name": "Richard Wilson",
            "status": "pending",
            "submittedDate": {
              "$date": "2022-12-21T22:10:28.732Z"
            },
            "comments": "Would love to be part of this",
            "skills": [
              "MongoDB"
            ],
            "logs": [
              {
                "status": "pending",
                "date": {
                  "$date": "2022-12-21T22:10:28.732Z"
                },
                "reviewerEmail": null
              }
            ]
          },
          {
            "email": "Kami.Haynes@ibm.com",
            "name": "Kami Haynes",
            "status": "pending",
            "submittedDate": {
              "$date": "2022-12-21T22:10:28.732Z"
            },
            "comments": "Would love to be part of this",
            "skills": [
              "MongoDB"
            ],
            "logs": [
              {
                "status": "pending",
                "date": {
                  "$date": "2022-12-21T22:10:28.732Z"
                },
                "reviewerEmail": null
              }
            ]
          }
    ]
}

const after = {
    interestedParticipants: [
        {
            "email": "rwilson@us.ibm.com",
            "name": "Richard Wilson",
            "status": "included",
            "submittedDate": {
              "$date": "2022-12-21T22:10:28.732Z"
            },
            "comments": "Would love to be part of this",
            "skills": [
              "MongoDB"
            ],
            "logs": [
              {
                "status": "pending",
                "date": {
                  "$date": "2022-12-21T22:10:28.732Z"
                },
                "reviewerEmail": null
              }
            ]
          },
          {
            "email": "Kami.Haynes@ibm.com",
            "name": "Kami Haynes",
            "status": "included",
            "submittedDate": {
              "$date": "2022-12-21T22:10:28.732Z"
            },
            "comments": "Would love to be part of this",
            "skills": [
              "MongoDB"
            ],
            "logs": [
              {
                "status": "pending",
                "date": {
                  "$date": "2022-12-21T22:10:28.732Z"
                },
                "reviewerEmail": null
              }
            ]
          }
    ]
}

console.log(JSON.stringify(updatedDiff(before, after)))
const statusScore = (value, valueSet) => {
    try {
        return valueSet.filter(i => i.id === value)[0].value
    } catch(e) {
        console.log(`Error finding status score from initiative Id '${_id?.toString() ?? ''}' with status of '${value}' against valueSet ${JSON.stringify(valueSet,null," ")}`)
    }
    
}

const status = [
    {
      "id": "none",
      "text": "None",
      "value": 5
    },
    {
      "id": "draft",
      "text": "Draft",
      "value": 10
    },
    {
      "id": "submitted",
      "text": "Submitted",
      "value": 20
    },
    {
      "id": "preApproved",
      "text": "Pre-approved",
      "value": 30
    },
    {
      "id": "open",
      "text": "Open",
      "value": 40
    },
    {
      "id": "requestForClosure",
      "text": "Request for closure",
      "value": 50
    },
    {
      "id": "requestForPublication",
      "text": "Request for publication",
      "value": 60
    },
    {
      "id": "report",
      "text": "Report",
      "value": 70
    },
    {
      "id": "closed",
      "text": "Closed",
      "value": 80
    },
    {
      "id": "rejected",
      "text": "Rejected",
      "value": 0
    },
    {
      "id": "deleted",
      "text": "Deleted",
      "value": 1
    }
  ]

const initiatives = [ {
    _id: 'x',
    status: "none1"
}]

const x = statusScore(initiatives[0].status, status)
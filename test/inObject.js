const statusCurrent = "deleted2"

const statusWithDateInfo = {
    deleted: "deleted",
    rejected: "rejected",
    draft: "draft",
    submitted: "submitted",
    preApproved: "preApproved",
    requestForClosure: "requestClosure",
    requestForPublication: "requestPublication",
    closed: "closed",
    report: "report"
  }

  console.log(statusCurrent in statusWithDateInfo)
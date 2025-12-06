const initiative  = {
    ERBReviewerSendEmail: [ true, false ]
}

if (typeof initiative.ERBReviewerSendEmail !== 'undefined' && initiative?.ERBReviewerSendEmail.includes(true)) {
    console.log("here")
}
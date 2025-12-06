export const logs = {
    logs: {
        system: [ {
            comment: String,
            date: Date
        }],
        auditTrail: [ {
            user: String,
            action: String,
            type: String,
            date: Date
        }]
    }
}
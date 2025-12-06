const crypto = require('crypto');
const validKey = crypto.createHash("sha256").update('NTM3MDBhNmYtY2E0OC00:YjNlYWUzNzgtNmFlOC00').digest("base64");
console.log(validKey);
const nodemailer = require("nodemailer");

const smtpConfig = {
    host: 'na.relay.ibm.com',
    port: 25,
    secure: false,
    ignoreTLS: true,
    debug: false,
    tls: {
      rejectUnauthorized: false
    }
  };
const transporter = nodemailer.createTransport(smtpConfig);
transporter.sendMail({
    from: "rwilson@us.ibm.com",
    to: "IBMOIC@ibm.com",
    subject: "Test",
    html: "<p>test</p>"
}, (error, info) => {console.log(info)})
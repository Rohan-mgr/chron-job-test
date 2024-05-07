const nodeMailer = require("nodemailer");

let configOptions = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_EMAIL_PASSWORD,
  },
};

const transport = nodeMailer.createTransport(configOptions);

module.exports = async function sendMail() {
  try {
    let mailOptions = {
      from: `"Our Bit" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_TARGET_EMAIL,
      subject: "Chron Job test email",
      text: "Hello!, This is a automated test email",
    };
    await transport.sendMail(mailOptions);
  } catch (e) {
    console.log("Error send mail => ", e);
    throw e;
  }
};

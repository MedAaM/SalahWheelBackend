const nodemailer = require("nodemailer");
require('dotenv').config()

async function sendEmail(email, content) {
  try {
      // Create Nodemailer transporter
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure:true,
        port: 465,
          auth: {
          user:process.env.user,
          pass:process.env.pass
        }
      });

      // Send email
      let info = await transporter.sendMail({
          from: 'boulevardetrading@gmail.com',
          to: email,
          subject: 'Notification from wheel',
          html: content
      });
      console.log('Email sent: ', info.response);
  } catch (error) {
      console.error('Error sending email: ', error);
  }
}
module.exports = sendEmail;

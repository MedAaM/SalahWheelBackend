const nodemailer = require("nodemailer");

async function sendEmail(email, content) {
  try {
      // Create Nodemailer transporter
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure:true,
        port: 465,
          auth: {
          user:'boulevardetrading@gmail.com',
          pass:'gexjnrjmqivvdknw'
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

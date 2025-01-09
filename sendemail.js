const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  auth: {
    user: 'nchafekar5@gmail.com', // Replace with your email
    pass: 'sgkd idsb gmxv kzhq'     // Replace with your app password
  }
});

// Email options
const mailOptions = {
  from: 'nchafekar5@gmail.com',       // Sender's email
  to: 'nickschafekar@gmail.com',   // Receiver's email
  subject: 'Hello from Nikhil!', // Email subject
  text: 'This is mail sent by nikhil!' // Email body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

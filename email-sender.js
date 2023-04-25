const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'felfahimi@gmail.com',
    pass: "hhhhhhhhhhhh",
  },
});

// send mail with defined transport object
let mailOptions = {
  from: 'felfahimi@gmail.com', // sender address
  to: 'issamefar58@gmail.com', // list of receivers
  subject: 'Email test by nodeJS', // Subject line
  html: '<p>Hello</p>', // HTML body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
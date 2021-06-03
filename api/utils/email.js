import nodemailer from 'nodemailer';

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

/**
 * Creates transporter object that will help us to send emails
 */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'dotlify@gmail.com',
    pass: "shreeDOT9960@#"
  }
  // service: MAIL_SERVICE,
  // auth: {
  //   user: MAIL_USER,
  //   pass: MAIL_PASS,
  // },
});

/**
 *  Sends an email to user
 *
 * @param {string} to email address where to send mail
 * @param {string} subject of the email
 * @param {string} html content of the email
 */
export const sendEmail = ({ to, subject, html }) => {
  return new Promise((resolve, reject) => {
    const options = { from: "dotlify@gmail.com", to, subject, html };

    return transporter
      .sendMail(options)
      .then((response) => {
        console.log("mail send");
        resolve(response.data);
      })
      .catch((error) => {
        console.log("mail fail");
        reject(error);
      });
  });
};

const sender = require("../config/emailConfig");

const sendBasicEmail = async (mailfrom, to, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailfrom,
      to: to,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

module.exports = { sendBasicEmail };

//
// Smtp -> a@b.com
// Receiver ->  d@e.com
// From :support@noti.com
//

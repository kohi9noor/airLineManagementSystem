const sender = require("../config/emailConfig");
const TicketRepo = require("../repository/ticketRepository");

const ticketRepo = new TicketRepo();
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

const fecthPendingEmails = async (timestamp) => {
  try {
    const response = ticketRepo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTickets = async (ticketId, data) => {
  try {
    const ticket = await ticketRepo.updateTicket(ticketId, data);
    return ticket;
  } catch (error) {}
};

const create = async (data) => {
  try {
    const response = await ticketRepo.createTicket(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendBasicEmail, fecthPendingEmails, create, updateTickets };

//
// Smtp -> a@b.com
// Receiver ->  d@e.com
// From :support@noti.com
//

const cron = require("node-cron");
const emailService = require("../service/emailService");
const sender = require("../config/emailConfig");

// 10:00 am
//  Every 5 minutes
// we will cehck are their any pnding emails which was expected to be sent within last 5 minutes and is pending

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    try {
      const response = await emailService.fecthPendingEmails();
      response.forEach((email) => {
        sender.sendMail(
          {
            to: email.recepientEmail,
            subject: email.subject,
            text: email.content,
          },
          async (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
              await emailService.updateTickets(email.id, { status: "SUCCESS" });
            }
          }
        );
      });
    } catch (error) {
      console.error("Error in cron job:", error);
    }
  });
};

module.exports = setupJobs;

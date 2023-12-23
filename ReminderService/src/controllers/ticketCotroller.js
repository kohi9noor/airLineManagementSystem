const TicketService = require("../service/emailService");

const createController = async (req, res) => {
  try {
    const response = await TicketService.create(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Succesfully registered an email reminder",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: [],
      err: error,
      message: "Successfully Registered an email reminder",
    });
  }
};

module.exports = {
  createController,
};

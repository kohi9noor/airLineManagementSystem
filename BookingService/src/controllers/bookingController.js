const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");
const {
  SuccessCodes,
} = require("../../../FlightAndSearchService/src/utils/error-codes");
const { createChannel, publishMessage } = require("../utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("../config/configDB");
const bookingService = new BookingService();

class BookingController {
  constructor() {}

  async sendMessageToQueue(req, res) {
    try {
      const channel = await createChannel();
      const payload = {
        data: {
          subject: "this is a noti from queue",
          content: "some queue will subscribe this",
          recepientEmail: "kohinoornimes@gmail.com",
          notificationTime: "2023-12-25T11:25:01.31+02:00", // Make sure it includes the correct offset
        },
        service: "CREATE_TICKET",
      };

      await publishMessage(
        channel,
        REMINDER_BINDING_KEY,
        JSON.stringify(payload)
      );
      return res.status(200).json({
        message: "Successfully published",
      });
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Failed to publish message",
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const response = await bookingService.createBooking(req.body);
      return res.status(StatusCodes.OK).json({
        data: response,
        message: "Successfully completed booking",
        success: true,
        err: {},
      });
    } catch (error) {
      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: "Something went wrong",
          success: false,
          err: error.explanation,
        });
    }
  }
}

module.exports = BookingController;

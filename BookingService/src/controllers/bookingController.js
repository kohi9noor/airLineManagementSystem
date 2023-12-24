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
    const channel = await createChannel();
    const data = { message: "Success" };
    publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));
    return res.status(200).json({
      message: "Successfully publiched",
    });
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

// const destroy = async (req, res) => {
//   try {
//     const response = await bookingService.destroy(req.params.id);
//     return res.status(SuccessCodes.OK).json({
//       message: "Successfully deleted the booking",
//       data: response,
//       err: {},
//     });
//   } catch (error) {
//     return res
//       .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({
//         message: "Something went wrong",
//         success: false,
//         err: error.explanation,
//       });
//   }
// };

module.exports = BookingController;

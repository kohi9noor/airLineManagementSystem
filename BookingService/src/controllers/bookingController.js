const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");
const {
  SuccessCodes,
} = require("../../../FlightAndSearchService/src/utils/error-codes");

const bookingService = new BookingService();

const create = async (req, res) => {
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
};

const destroy = async (req, res) => {
  try {
    const response = await bookingService.destroy(req.params.id);
    return res.status(SuccessCodes.OK).json({
      message: "Successfully deleted the booking",
      data: response,
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
};

module.exports = {
  create,
  destroy,
};

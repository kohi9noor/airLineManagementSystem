const { flightSerice } = require("../services/index");
const {
  ClientError,
  ServerError,
  SuccessCodes,
} = require("../utils/error-codes");
const flightService = new flightSerice();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      err: {},
      message: "Succesfully FlightCreated",
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerError.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      messsage: "Not able to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerError.INTERNAL_SERVER_ERROR).json({
      data: {},
      sucess: false,
      message: "Not able to update a flights",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flight",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      sucess: true,
      err: {},
      message: "Successfully update the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to update the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};

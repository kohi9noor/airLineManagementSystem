const { flightSerice } = require("../services/index");

const flightService = new flightSerice();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    console.log(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Succesfully FlightCreated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "Not able to create a flight",
      err: error,
    });
  }
};

module.exports = create;

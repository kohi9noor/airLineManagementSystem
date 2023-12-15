const { getAirports } = require("../services/airport-service");
const { AirportService } = require("../services/index");

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      address: req.body.address,
      cityId: req.body.cityId,
    });

    return res.status(201).json({
      data: airport,
      created: true,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
}

async function getAirport(req, res) {
  try {
    const response = await AirportService.getAirport(req.body.id);
    console.log(req.body.id);
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: "cannot fetch the airport",
      err: error,
    });
  }
}

async function getAllAirport(req, res) {
  try {
    const response = await AirportService.getAirports();
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      err: error,
      message: "unable to fetch all aiports",
    });
  }
}
module.exports = { createAirport, getAirport, getAllAirport };

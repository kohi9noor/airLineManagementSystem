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

module.exports = { createAirport };

const cityService = require("../services/cityService.js");

const CityService = new cityService();

const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(`Something went wrong in con controller layer ${error}`);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};
// Patch -> /city/:id -> req.body

const update = async (req, res) => {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "SuccessFully updated",
      err: {},
    });
  } catch (error) {
    console.log(`Something went wrong in controller layer ${error}`);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City has not updated",
      err: error,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(`Something went wrong in controller layer`);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// GET  -> /city/:id
const get = async (req, res) => {
  try {
    const city = await CityService.getAllCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully get the cities",
      err: {},
    });
  } catch (error) {
    console.log(`Something went wrong in controller layer ${error}`);
    return res.status(500).json({
      data: {},
      success: false,
      message: "You are not able to fetch the cities",
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
};

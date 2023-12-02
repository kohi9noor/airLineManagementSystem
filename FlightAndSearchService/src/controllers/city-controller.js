const { cityService } = require("../services/cityService.js");

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

const update = async (req, res) => {
  try {
  } catch (error) {
    console.log(`Something went wrong in controller layer ${error}`);
  }
};

const destroy = (req, res) => {
  try {
  } catch (error) {
    console.log(`Something went wrong in controller layer`);
  }
};

const get = (req, res) => {
  try {
  } catch (error) {
    console.log(`Something went wrong in controller layer ${error}`);
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
};

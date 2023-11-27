const { Cityservice } = require("../services/index.js");

// POST DATA -> req.body

const CityService = new Cityservice();

const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Succssfully created a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
    });
  }
};

// Mc agar ab kuch open kiya to g faad dunga bosdk

const destory = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const get = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const update = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

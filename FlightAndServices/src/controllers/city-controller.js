const { CityService } = require("../services/index.js");

const CitySerivce = new CityService();

// POST
// DATA -> req.body as json format

const create = async (req, res) => {
  try {
    const city = await CitySerivce.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfullly created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

//  Delete -> /city:id
const destroy = async (req, res) => {
  try {
    const response = await CitySerivce.deleteCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfullly delted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

//  GET -> /city/:

const get = async (req, res) => {
  try {
    const response = await CitySerivce.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfullly fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

//  PAtch -> city/:id -> req.body
const uppate = async (req, res) => {
  try {
    const response = await CitySerivce.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfullly updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CitySerivce.getAll();
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "No city",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  uppate,
  getAll,
};

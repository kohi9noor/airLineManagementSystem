const { response } = require("express");
const userService = require("../services/userServices");
const userSV = new userService();

const create = async (req, res) => {
  try {
    console.log(req.body);
    const reponse = await userSV.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: reponse,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userSV.signIn(req.body.email, req.body.password);
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went worng",
      data: {},
      success: false,
      err: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userSV.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went worng",
      data: {},
      success: false,
      err: error,
    });
  }
};
module.exports = {
  create,
  signIn,
  isAuthenticated,
};

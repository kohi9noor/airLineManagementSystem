const { AirportRepo } = require("../repository/index.js");

const airportRepo = new AirportRepo();

async function createAirport(data) {
  try {
    const airport = await airportRepo.create(data);
    return airport;
  } catch (error) {
    console.log("Something went wrong in the airport service layer");
    throw { error };
  }
}

async function getAirports() {
  try {
    const airports = await airportRepo.getAll();
    return airports;
  } catch (error) {
    console.log("Something went wrong in the airport service layer");
    throw { error };
  }
}

async function getAirport(id) {
  try {
    const airports = await airportRepo.get(id);
    return airports;
  } catch (error) {
    console.log("Something went wrong in the airport service layer");
    throw { error };
  }
}

async function destroyAirport(id) {
  try {
    const airports = await airportRepo.destroy(id);
    return airports;
  } catch (error) {
    console.log("Something went wrong in the airport service layer");
    throw { error };
  }
}

module.exports = {
  createAirport,
  getAirport,
  getAirports,
  destroyAirport,
};

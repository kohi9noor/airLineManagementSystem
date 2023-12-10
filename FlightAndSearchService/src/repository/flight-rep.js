const { Flights } = require("../models/index");

class FlightRepo {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }
}
module.exports = FlightRepo;

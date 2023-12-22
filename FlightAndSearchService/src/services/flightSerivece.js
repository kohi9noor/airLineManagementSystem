const { AirplaneRepo, FlightRepo } = require("../repository/index");
const compareTime = require("../utils/helper.js");
class FlightSerivce {
  constructor() {
    this.airplaneRepo = new AirplaneRepo();
    this.flightRepo = new FlightRepo();
  }
  async createFlight(data) {
    console.log(data);
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arriaval time cannot be less than departure time" };
      } else {
        const airplane = await this.airplaneRepo.getAirplane(data.airplaneId);
        const flight = await this.flightRepo.createFlight({
          ...data,
          totalSeats: airplane.capacity,
        });
        return flight;
      }
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepo.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = this.flightRepo.getFlights(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await this.flightRepo.updateFlights(flightId, data);
      return flight;
    } catch (error) {
      console.log("somethingw went wrong in the flight service");
      throw { error };
    }
  }
}

module.exports = FlightSerivce;

/* 
 {
    FlightNumber,
    airplanbeId,
    departureAirportId,
    arriavalAirportID,
    departureTime,
    departureTime,
    price,
    to
 }

*/

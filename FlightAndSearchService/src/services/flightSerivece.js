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

  async getFlightData() {
    // get
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

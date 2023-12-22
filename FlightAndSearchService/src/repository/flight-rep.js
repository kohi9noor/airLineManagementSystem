const { Op } = require("sequelize");
const { Flights } = require("../models/index");

class FlightRepo {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    let priceFilter = [];

    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });
    console.log(filter);
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async getFlights(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const filght = await Flights.findAll({
        where: filterObject,
      });
      return filght;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async updateFlights(flightId, data) {
    try {
      await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}
module.exports = FlightRepo;

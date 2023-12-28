const { BookingRepository } = require("../repository/index");
const { FLIGHT_SERVICE_PATH } = require("../config/configDB");
const axios = require("axios");
const { ServiceError } = require("../utils/errors");

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const idempotencyToken = data.idempotencyToken;

      const existingBooking = await this.bookingRepository.getByToken(
        idempotencyToken
      );
      if (existingBooking) {
        return existingBooking;
      }

      const flightId = data.flightId;

      //   passing the flightId from booking data to flight service for fecthing the flight
      const response = await axios.get(
        `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`
      );

      // Getting the data from the flight that given by flight microservice

      const flightData = response.data.data;
      const priceOftheFlight = flightData.price;

      // compering the no of seats that given the user and totalSeats of the plane

      if (data.noOfSeats > flightData.totalSeats) {
        throw new ServiceError(
          "Something went wrong in the booking process",
          "InSufficient seats in the flight"
        );
      }

      const totalCost = priceOftheFlight * data.noOfSeats;

      const bookingPayload = { ...data, totalCost };
      const booking = await this.bookingRepository.create(bookingPayload);

      // path of the second microservice

      const updateFlightRepositoryUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;

      const updateSeats = flightData.totalSeats - booking.noOfSeats;
      console.log(updateSeats);
      console.log("Booking ", booking);
      await axios.patch(updateFlightRepositoryUrl, {
        totalSeats: updateSeats,
      });

      // Updating the status of the booking

      const finalBooking = await this.bookingRepository.update(booking.id, {
        status: "Booked",
      });

      return finalBooking;
    } catch (error) {
      console.log(error.error);
      console.log("gend faat gai service ki");
      throw new ServiceError();
    }
  }

  async destroy(bookingId) {
    try {
      const response = await this.bookingRepository.delect(bookingId);
      return response;
    } catch (error) {
      console.log("bom bom in the service");
      throw new ServiceError();
    }
  }
}

module.exports = BookingService;

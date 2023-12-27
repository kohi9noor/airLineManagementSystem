"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here
    }
  }

  Booking.init(
    {
      idempotencyToken: {
        type: DataTypes.UUID, // Assuming you want to use UUID for tokens
        allowNull: true, // It can be nullable if you want to allow bookings without idempotency tokens
        unique: true, // Ensure uniqueness of idempotency tokens
      },
      flightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["InProcess", "Booked", "Cancelled"],
        defaultValue: "InProcess",
      },
      noOfSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );

  return Booking;
};

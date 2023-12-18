"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      FlightId: {
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
        allowNullL: false,
        defaultValue: 1,
      },
      totalCost: {
        type: DataTypes.INTEGER,
        allowNullL: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};

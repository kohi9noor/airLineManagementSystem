"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports", [
      {
        name: "CheemsPur International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheems International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bihar International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "London International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agra International Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheems International Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Berojgar International Airport",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Delhi International Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

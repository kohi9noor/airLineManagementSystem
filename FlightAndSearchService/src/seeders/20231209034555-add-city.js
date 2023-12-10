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
    await queryInterface.bulkInsert("Cities", [
      {
        name: "Bihar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lomdon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheems Pur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Berojgar city",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kashmir",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gujrat",
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

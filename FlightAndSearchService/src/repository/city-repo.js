const { City } = require("../models/index");
const { Op } = require("sequelize");
class cityRepo {
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Somethin went wrong in the repo layer", error);
      throw { error };
    }
  }

  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Somethin went wrong in the repo layer", error);
      throw { error };
    }
  }

  async updateCity(data, cityId) {
    try {
      const update = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return update;
    } catch (error) {
      console.log("Somethin went wrong in the repo layer", error);
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const get = await City.findByPk(cityId);
      return get;
    } catch (error) {
      console.log("Somethin went wrong in the repo layer", error);
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const getallCities = await City.findAll();
      return getallCities;
    } catch (error) {
      console.log(`Something went wrong in the repo layer ${error}`);
      throw { error };
    }
  }
}

module.exports = cityRepo;

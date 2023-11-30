const city = require("../models/city");
const { City } = require("../models/index");

class CityRepo {
  // {name:"New delhi"}
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something wen wrong in the repository layer");
      throw { error };
    }
  }

  async deletCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Somethign went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCity() {
    try {
      const city = await City.findAll();
      return city;
    } catch (error) {
      console.log("Something went wrong in the city-repository");
      throw { error };
    }
  }
}

module.exports = CityRepo;

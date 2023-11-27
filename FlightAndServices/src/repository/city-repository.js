const { City } = require("../models/index.js");

class CityRepo {
  async createCity({ name }) {
    // obj something like this {name:"New delhi "}
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCity({ id }) {
    try {
      await City.destory({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateCity({ CityId, data }) {
    try {
      const city = await City.update(data, {
        where: {
          id: CityId,
        },
      });
      return city;
    } catch (error) {
      console.log(error);
    }
  }

  async getCity({ cityId }) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CityRepo;

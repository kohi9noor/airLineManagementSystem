const { cityRepo } = require("../repository/index.js");

class cityService {
  constructor() {
    this.CityRepo = new cityRepo();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepo.createCity(data);
      return city;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const res = await this.CityRepo.deleteCity(cityId);
      return res;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async updateCity(cityid, data) {
    try {
      const res = await this.CityRepo.updateCity(data, cityid);
      return res;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async getAllCity(cityId) {
    try {
      const city = await this.CityRepo.getCity(cityId);
      return city;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }
}

module.exports = cityService;

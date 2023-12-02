const { cityRepo } = require("../repository/index.js");

class cityService {
  constructor() {
    this.cityRepo = new cityService();
  }

  async createCity(data) {
    try {
      const city = await this.cityService.createCity(data);
      return city;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const res = await this.cityService.deleteCity(cityId);
      return res;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async updateCity(cityid, data) {
    try {
      const res = await this.cityService.updateCity(data, cityid);
      return res;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }

  async getAllCity(cityId) {
    try {
      const city = await this.cityService.getCity(cityId);
      return city;
    } catch (error) {
      console.log(`Something went wrong in the service layer ${error}`);
      throw { error };
    }
  }
}

module.exports = cityService;

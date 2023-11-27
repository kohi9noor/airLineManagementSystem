const { CityRepo } = require("../repository/index.js");

class Cityservice {
  constructor() {
    this.CityRepo = new CityRepo();
  }

  async createCity(data) {
    try {
      const result = await this.CityRepo.createCity(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepo.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepo.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log(error);
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepo.getCity(cityId);
      return city;
    } catch (error) {
      console.log(error);
    }
  }
}

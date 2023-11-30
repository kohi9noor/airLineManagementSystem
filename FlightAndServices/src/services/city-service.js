const { CityRepo } = require("../repository/index.js");

class CityService {
  // Hackeerrank

  constructor() {
    this.cityRepo = new CityRepo();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepo.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer!", error);
    }
  }

  async deleteCity(cityId) {
    try {
      const reponse = await this.cityRepo.deletCity(cityId);
      return reponse;
    } catch (error) {
      console.log("Something Went Wrong in service layer", error);
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepo.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Somethihng went wrong in serivce layer", error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepo.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }

  async getAll() {
    try {
      const city = await this.cityRepo.getAllCity();
      return city;
    } catch (error) {
      console.log("Something went wrong in the server layer");
    }
  }
}

module.exports = CityService;

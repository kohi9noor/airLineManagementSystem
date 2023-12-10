const { Airplan } = require("../models/index");

class AirplaneRepo {
  async getAirplane(id) {
    try {
      const airplane = await Airplan.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Somethin went wrong in the repo layer");
      throw { error };
    }
  }
}

module.exports = AirplaneRepo;

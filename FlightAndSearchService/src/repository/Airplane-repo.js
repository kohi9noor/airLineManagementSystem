const CrudRepo = require("./crud-repositiory.js");
const { Airplan } = require("../models");

class AirportRepository extends CrudRepo {
  constructor() {
    super(Airplan);
  }
}

module.exports = AirportRepository;

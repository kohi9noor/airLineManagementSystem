const CrudRepo = require("./crud-repositiory.js");
const { Airport } = require("../models");

class AirportRepository extends CrudRepo {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;

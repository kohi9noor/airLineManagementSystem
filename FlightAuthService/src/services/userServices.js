const UserRepo = require("../repository/userRepo");

class userService {
  constructor() {
    this.userRepository = new UserRepo();
  }

  async create(data) {
    try {
      console.log(data);
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = userService;

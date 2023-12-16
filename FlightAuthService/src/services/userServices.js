const UserRepo = require("../repository/userRepo");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
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

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("something went wrong in token creation");
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("somwthing went wrong in token validation");
      throw { error };
    }
  }
}

module.exports = userService;

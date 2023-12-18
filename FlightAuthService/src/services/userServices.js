const UserRepo = require("../repository/userRepo");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
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
  async signIn(email, password) {
    try {
      // step => fetch the user using the email
      const user = await this.userRepository.getByEmail(email);
      // step -> compare incoming plain password with stores encryted password
      const passwordMatch = this.checkPassword(password, user.password);
      if (!passwordMatch) {
        console.log("password dosent match");
        throw { error: "incorrect password" };
      }
      // Step -> if passwords match then create a token and send it
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("something went wrong in the signin process");
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
      console.log(response);
      return response;
    } catch (error) {
      console.log("somwthing went wrong in token validation");
      throw { error };
    }
  }

  checkPassword(userInputPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPassword, encryptedPassword);
    } catch (error) {
      console.log("something went in password compersion");
      throw { error };
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { err: "invalid token" };
      }
      console.log(response);
      const user = await this.userRepository.getById(response.id);
      if (!user) {
        throw { error: "No user with the corresponding token exists" };
      }
      return user.id;
    } catch (error) {
      console.log("something went in password compersion");
      throw { error };
    }
  }

  isAdmin(userId) {
    try {
      return this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = userService;

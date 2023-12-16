const { User } = require("../models/index");

class UserRepo {
  async create(data) {
    try {
      console.log(data);
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Somethign went wrong on repository layer");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await UserRepo.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("somethingw ent wrong on repository layer");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const response = await User.findByPk(userId, {
        attributes: ["email", "id", "password"],
      });
      return response;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the getEmail process");
      throw { error };
    }
  }
}

module.exports = UserRepo;

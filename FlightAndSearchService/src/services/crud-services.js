// class CrudService {
//   constructor(repo) {
//     this.repo = repo;
//   }
//   async create(data) {
//     try {
//       const response = await this.repo.create(data);
//       return response;
//     } catch (error) {
//       console.log("Something went wrong in the crud service");
//       throw { error };
//     }
//   }
//   async destroy(id) {
//     try {
//       const response = await this.repo.destroy(id);
//       return response;
//     } catch (error) {
//       console.log("Something went wrong in the crud service");
//       throw { error };
//     }
//   }

//   async get(id) {
//     try {
//       const response = await this.repo.get(id);
//       return response;
//     } catch (error) {
//       console.log("Something went wrong in the crud service");
//       throw { error };
//     }
//   }

//   async getAll() {
//     try {
//       const reponse = await this.repo.getAll();
//       return reponse;
//     } catch (error) {
//       console.log("Something went wrong in the crud service");
//       throw { error };
//     }
//   }

//   async update(id, data) {
//     try {
//       const response = await this.repo.update(data, id);
//       return response;
//     } catch (error) {
//       console.log("Something went wrong in the crud service");
//       throw { error };
//     }
//   }
// }

// module.exports = CrudService;

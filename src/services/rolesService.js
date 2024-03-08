import Roles from "#src/models/Roles";

const exposeServices = {
  findOneRole: async ({ id: _id }) => {
    try {
      const oneRole = await Roles.findOne({ _id });
      return oneRole;
    } catch (error) {
      throw new Error(error);
    }
  },
  findAllRoles: async () => {
    try {
      const allRole = await Roles.find();
      return allRole;
    } catch (error) {
      throw new Error(error);
    }
  },

  addNewRoles: async (rawData) => {
    try {
      const newRoles = new Roles(rawData);
      const addRole = await newRoles.save();
      return addRole;
    } catch (error) {
      throw error;
    }
  },

  updateRole: async ({ id, body }) => {
    try {
      const updatedRole = await Roles.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      return updatedRole;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteRole: async ({ id }) => {
    try {
      const updatedRole = await Roles.deleteOne({ _id: id });
      return updatedRole;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default exposeServices;

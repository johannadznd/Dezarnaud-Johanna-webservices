import Skills from "#src/models/Skills";

const exposeServices = {
  findOneSkill: async ({ id: _id }) => {
    try {
      const oneSkill = await Skills.findOne({ _id });
      return oneSkill;
    } catch (error) {
      throw new Error(error);
    }
  },
  findAllSkills: async () => {
    try {
      const allSkill = await Skills.find();
      return allSkill;
    } catch (error) {
      throw new Error(error);
    }
  },

  addNewSkills: async (rawData) => {
    try {
      const newSkills = new Skills(rawData);
      const addSkill = await newSkills.save();
      return addSkill;
    } catch (error) {
      throw error;
    }
  },

  updateSkill: async ({ id, body }) => {
    try {
      const updatedSkill = await Skills.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      return updatedSkill;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteSkill: async ({ id }) => {
    try {
      const updatedSkill = await Skills.deleteOne({ _id: id });
      return updatedSkill;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default exposeServices;

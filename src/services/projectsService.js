import Project from "#src/models/Project";
import queryBuilder from "#src/utils/mongoQueryBuilder";

const exposeServices = {
  findOneProject: async ({ id: _id }) => {
    try {
      const oneProject = await Project.findOne({ _id });
      return oneProject;
    } catch (error) {
      throw new Error(error);
    }
  },
  findAllProject: async (query) => {
    const { filter, projection, options } = queryBuilder.getFindOptions({
      query,
    });

    try {
      const allProject = await Project.find(filter,projection,options);
      return allProject;
    } catch (error) {
      throw new Error(error);
    }
  },

  addNewProject: async (rawData) => {
    try {
      const newProject = new Project(rawData);
      const addProject = await newProject.save();
      return addProject;
    } catch (error) {
      throw error;
    }
  },

  updateProject: async ({ id, body }) => {
    try {
      const updatedProject = await Project.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      return updatedProject;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteProject: async ({ id }) => {
    try {
      const updatedProject = await Project.deleteOne({ _id: id });
      return updatedProject;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default exposeServices;

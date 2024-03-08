import projectsService from "#src/services/projectsService";

const exposeController = {
  createProject: async (req, res) => {
    const { body } = req;
    try {
      const createProject = await projectsService.addNewProject(body);
      return res.json(createProject);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  updateProject: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await projectsService.updateProject({ id, body });

      return res.json(toUpdate);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;
    try {
      const toDelete = await projectsService.deleteProject({ id });

      return res.json(toDelete);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  allProjects: async (req, res) => {
    const { query } = req;
    console.log(query);
    const allProjects = await projectsService.findAllProject(query);
    return res.json(allProjects);
  },

  getLastProject: async (req, res) => {
    const query = { sort: "-createdAt", limit: "3" };
    const allProjects = await projectsService.findAllProject(query);
    return res.json(allProjects);
  },

  oneProject: async (req, res) => {
    const {
      params: { id },
    } = req;
    const oneCrea = await projectsService.findOneProject({ id });
    if (!oneCrea) return res.sendStatus(404);
    return res.json(oneCrea);
  },
};

export default exposeController;

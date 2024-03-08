import projectsService from "#src/services/projectsService";
import {redisClient,get} from '#src/services/redisClient';

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
    const allProjects = await projectsService.findAllProject(query);
    return res.json(allProjects);
  },

  getLastProject: async (req, res) => {
    const keyCache = "last_project";
    const onCache = await redisClient.get(keyCache);
    if (onCache) {
      res.set("x-cache", "HIT");
      return res.json(JSON.parse(onCache));
    } else {
      const query = { sort: "-createdAt", limit: "3" };
      const lastProjects = await projectsService.findAllProject(query);

      if (!lastProjects) return res.sendStatus(404);
      await redisClient.set("last_project", JSON.stringify(lastProjects), {
        EX: 20,
      });
      res.set("x-cache", "MISS");
      return res.json(lastProjects);
    }
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

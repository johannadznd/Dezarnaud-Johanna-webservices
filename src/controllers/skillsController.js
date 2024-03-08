import skillsService from "#src/services/skillsService";

const exposeController = {
  createSkill: async (req, res) => {
    const { body } = req;
    try {
      const createSkill = await skillsService.addNewSkills(body);
      return res.json(createSkill);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  updateSkill: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await skillsService.updateSkill({ id, body });

      return res.json(toUpdate);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  deleteSkill: async (req, res) => {
    const { id } = req.params;
    try {
      const toDelete = await skillsService.deleteSkill({ id });

      return res.json(toDelete);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  allSkills: async (req, res) => {
    const allSkills = await skillsService.findAllSkills();
    return res.json(allSkills);
  },

  oneSkill: async (req, res) => {
    const {
      params: { id },
    } = req;
    const oneCrea = await skillsService.findOneSkill({ id });
    if (!oneCrea) return res.sendStatus(404);
    return res.json(oneCrea);
  },
};

export default exposeController;

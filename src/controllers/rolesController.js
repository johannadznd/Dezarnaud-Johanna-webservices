import rolesService from "#src/services/rolesService";

const exposeController = {
  createRole: async (req, res) => {
    const { body } = req;
    try {
      const createRole = await rolesService.addNewRoles(body);
      return res.json(createRole);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  updateRole: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await rolesService.updateRole({ id, body });

      return res.json(toUpdate);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  deleteRole: async (req, res) => {
    const { id } = req.params;
    try {
      const toDelete = await rolesService.deleteRole({ id });

      return res.json(toDelete);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  allRoles: async (req, res) => {
    const allRoles = await rolesService.findAllRoles();
    return res.json(allRoles);
  },

  oneRole: async (req, res) => {
    const {
      params: { id },
    } = req;
    const oneCrea = await rolesService.findOneRole({ id });
    if (!oneCrea) return res.sendStatus(404);
    return res.json(oneCrea);
  },
};

export default exposeController;

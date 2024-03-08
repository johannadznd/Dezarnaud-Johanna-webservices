import usersService from "#src/services/usersService";

const exposeController = {
  allUsers: async (req, res) => {
    const allUsers = await usersService.findAllUsers();
    return res.json(allUsers);
  },
  createUser: async (req, res) => {
    const { body } = req;
    try {
      const registeredUser = await usersService.createUser(body);
      return res.json(registeredUser);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  oneUser: async (req, res) => {
    const {
      params: { id },
    } = req;
    const oneCrea = await usersService.findOneUserById({ id });
    if (!oneCrea) return res.sendStatus(404);
    return res.json(oneCrea);
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const toDelete = await usersService.deleteUser({ id });

      return res.json(toDelete);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  patchUser: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toPatch = await usersService.patchUser({ id, body });
      return res.json(toPatch);
    } catch (error) {
      return res.sendStatus(400);
      // return res.json({error})
    }
  },
};

export default exposeController;

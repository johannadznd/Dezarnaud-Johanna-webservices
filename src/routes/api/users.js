import express from "express";
import usersController from "#src/controllers/usersController";
import authGard from "#src/middleware/authGard";
import RBAC from '#src/middleware/rbac'

const router = express.Router();

router.get("/", authGard.protect, RBAC.authorizationChecker, usersController.allUsers);

router.post("/", usersController.createUser);

router.get("/:id", authGard.protect, RBAC.authorizationChecker, usersController.oneUser);

router.delete("/:id", authGard.protect, RBAC.authorizationChecker, usersController.deleteUser);

router.patch("/:id", authGard.protect, RBAC.authorizationChecker, usersController.patchUser);

export default router;

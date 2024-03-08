import express from 'express';
import authGard from '#src/middleware/authGard'
import rolesController from '#src/controllers/rolesController'
import RBAC from '#src/middleware/rbac'

const router = express.Router();

router.post('/',authGard.protect, RBAC.authorizationChecker, rolesController.createRole);

router.put('/:id',authGard.protect, RBAC.authorizationChecker, rolesController.updateRole);

router.get('/',authGard.protect, RBAC.authorizationChecker, rolesController.allRoles);

router.get('/:id',authGard.protect, RBAC.authorizationChecker, rolesController.oneRole);

router.delete('/:id',authGard.protect, RBAC.authorizationChecker, rolesController.deleteRole);

export default router;
import express from 'express';
import authGard from '#src/middleware/authGard'
import skillsController from '#src/controllers/skillsController'
import RBAC from '#src/middleware/rbac'

const router = express.Router();

router.post('/',authGard.protect, RBAC.authorizationChecker, skillsController.createSkill);

router.put('/:id',authGard.protect, RBAC.authorizationChecker, skillsController.updateSkill);

router.get('/',authGard.protect, RBAC.authorizationChecker, skillsController.allSkills);

router.get('/:id',authGard.protect, RBAC.authorizationChecker, skillsController.oneSkill);

router.delete('/:id',authGard.protect, RBAC.authorizationChecker, skillsController.deleteSkill);

export default router;
import express from 'express';
import authGard from '#src/middleware/authGard'
import projectsController from '#src/controllers/projectsController'
import RBAC from '#src/middleware/rbac'

const router = express.Router();

router.post('/',authGard.protect,RBAC.authorizationChecker, projectsController.createProject);

router.put('/:id',authGard.protect,RBAC.authorizationChecker, projectsController.updateProject);

router.get('/', projectsController.allProjects);

router.get('/lastProject', projectsController.getLastProject);

router.get('/:id', projectsController.oneProject);

router.delete('/:id',authGard.protect,RBAC.authorizationChecker, projectsController.deleteProject);

export default router;
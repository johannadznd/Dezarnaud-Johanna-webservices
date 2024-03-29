import express from 'express';
import users from './users.js';
import skills from './skills.js';
import auth from './auth.js';
import roles from './roles.js';
import projects from './projects.js'

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/users', users);
router.use('/skills', skills);
router.use('/auth', auth);
router.use('/roles', roles);
router.use('/projects', projects);

export default router;

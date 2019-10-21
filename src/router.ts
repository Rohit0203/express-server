import * as express from 'express';
import * as http from 'http';
import Controller from './controllers/trainee/Controller';

import traineeRoutes from './controllers/trainee/routes';
import userRoutes from './controllers/user/routes';



const router = express.Router();

router.use('/trainee', traineeRoutes);
router.use('/users', userRoutes);


export default router;


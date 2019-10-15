import * as express from 'express';
import Controllers from './Controller';
import { checkSchema} from 'express-validator';
import apiConfig from '../../libs/middleware/api-config';
const controller=new Controllers();
import {apiSchemaValidator} from '../../libs/routes/apiSchemaValidator';
const traineeRoutes=express();


traineeRoutes.get('/getTrainees', checkSchema(apiConfig.get), apiSchemaValidator, controller.get)
traineeRoutes.post('/postTrainees',controller.post)
traineeRoutes.put('/putTrainees',controller.put)
traineeRoutes.delete('/deleteTrainees',controller.delete)
export default traineeRoutes;
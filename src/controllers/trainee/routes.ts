import * as express from 'express';
import { checkSchema } from 'express-validator';
import apiConfig from '../../libs/middleware/api-config';
import Controllers from './Controller';
const controller = new Controllers();
import { apiSchemaValidator } from '../../libs/routes/apiSchemaValidator';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';

const traineeRoutes = express();

traineeRoutes.get('/', authMiddleWare('getUsers', 'read'), checkSchema(apiConfig.get as any), apiSchemaValidator, controller.get);
traineeRoutes.post('/', authMiddleWare('getUsers', 'write'), checkSchema(apiConfig.create as any), apiSchemaValidator, controller.post);
traineeRoutes.put('/:id', authMiddleWare('getUsers', 'read'), checkSchema(apiConfig.update as any), apiSchemaValidator, controller.put);
traineeRoutes.delete('/:id', authMiddleWare('getUsers', 'write'), checkSchema(apiConfig.delete as any), apiSchemaValidator, controller.delete);
export default traineeRoutes;
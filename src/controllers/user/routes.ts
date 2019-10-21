import * as express from 'express';
import { checkSchema } from 'express-validator';
import apiConfig from '../../libs/middleware/api-config';
import { apiSchemaValidator } from '../../libs/routes/apiSchemaValidator';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import Controllers from './Controller';

const controller = new Controllers();
const userRoutes = express();

userRoutes.get('/', authMiddleWare('getUsers', 'read'), checkSchema(apiConfig.get as any), apiSchemaValidator, controller.get);
userRoutes.post('/', authMiddleWare('getUsers', 'write'), checkSchema(apiConfig.create as any), apiSchemaValidator, controller.post);
userRoutes.put('/:id', authMiddleWare('getUsers', 'read'), checkSchema(apiConfig.update as any), apiSchemaValidator, controller.put);
userRoutes.delete('/:id', authMiddleWare('getUsers', 'write'), checkSchema(apiConfig.delete as any), apiSchemaValidator, controller.delete);
export default userRoutes;
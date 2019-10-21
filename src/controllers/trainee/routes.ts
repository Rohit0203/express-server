import * as express from 'express';
import { checkSchema } from 'express-validator';
import apiConfig from '../../libs/middleware/api-config';
import Controllers from './Controller';
const controller = new Controllers();
import { apiSchemaValidator } from '../../libs/routes/apiSchemaValidator';
const traineeRoutes = express();


traineeRoutes.get('/', checkSchema(apiConfig.get as any), apiSchemaValidator, controller.get);
traineeRoutes.post('/', checkSchema(apiConfig.create as any), apiSchemaValidator, controller.post);
traineeRoutes.put('/:id', checkSchema(apiConfig.update as any), apiSchemaValidator, controller.put);
traineeRoutes.delete('/:id', checkSchema(apiConfig.delete as any), apiSchemaValidator, controller.delete);
export default traineeRoutes;
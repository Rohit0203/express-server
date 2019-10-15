import * as express from 'express';
import Controllers from './Controller'

const controller=new Controllers();
const traineeRoutes=express();

traineeRoutes.get('/getTrainees',controller.get)
traineeRoutes.post('/postTrainees',controller.post)
traineeRoutes.put('/putTrainees',controller.put)
traineeRoutes.delete('/deleteTrainees',controller.delete)
export default traineeRoutes;
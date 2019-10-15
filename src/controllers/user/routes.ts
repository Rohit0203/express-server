import * as express from 'express';
import Controllers from './Controller'

const controller=new Controllers();
const userRoutes=express();

userRoutes.get('/getTrainees',controller.get)
userRoutes.post('/postTrainees',controller.post)
userRoutes.put('/putTrainees',controller.put)
userRoutes.delete('/deleteTrainees',controller.delete)
export default userRoutes;
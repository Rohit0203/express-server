import Controller from './controllers/trainee/Controller';
import * as express from 'express';
import * as http from 'http';

const router=express.Router();
const rout=new Controller();

router.get('/get',(req,res)=>{
    res.send(rout.get())
})
module.exports=router;


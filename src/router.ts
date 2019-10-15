import Controller from './controllers/trainee/Controller';
import * as express from 'express';
import * as http from 'http';

const router=express.Router();
const rout=new Controller();

router.get('/get',(req,res)=>{
    res.send(rout.get())
})
router.post('/post',(req,res)=>{
    res.send(rout.post());
})
router.put('/put',(req,res)=>{
    res.send(rout.put());
})
router.delete('/delete',(req,res)=>{
    res.send(rout.delete());
})


export default router;


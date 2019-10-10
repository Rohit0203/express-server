import * as express from 'express';

const app=express();

app.get('/get',(req,res)=>{
    res.send('Get method invoked');

})
app.post('/post',(req,res)=>{
    res.send('POST method invoked');
    
})
app.put('/put',(req,res)=>{
    res.send('put method invoked');
    
})
app.delete('/delete',(req,res)=>{
    res.send('Delete method invoked');
})
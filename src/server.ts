import Config from './config/IConfig'
import * as express from 'express'
const  app=express();
export default class HttpServer
{
    
    constructor(private config:Config){
    }
    public bootstrap()
    {
        this.setUpRoutes();

    }
    private setUpRoutes()
    {
        app.get('/health-check',(req,res)=>{
            res.send('<h1>I am OK</h1>');
        })
    }
    public run()
    {
        app.listen(this.config.PORT,()=>
        {
            console.log(`Server is running at PORT:${this.config.PORT}`);
        })

    }
}
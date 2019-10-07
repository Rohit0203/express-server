import validateEmail from './helpers'

export default class User{
    validUsers:number=0;
    invalidUsers:number=0;
    validateUsers = (users:{traineeEmail:string,reviewerEmail:string}[])=>
    {
        console.log('hello');
        
        users.forEach(element => {
            const {traineeEmail:t,reviewerEmail:r}=element;
            if(validateEmail(t) && validateEmail(r))
           {
            this.validUsers+=1;
            console.log('traineeEmail:',t+"   "+'reviewerEmail:',r+'\t validUser:\t',this.validUsers);
            
           }
           else
           {
            this.invalidUsers+=1;
            console.log('traineeEmail:',t+"   "+'reviewerEmail:',r+"\t invalidUser:\t",this.invalidUsers);
           }
        });
    
    }
}


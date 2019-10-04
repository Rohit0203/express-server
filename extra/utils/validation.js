let users=[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
},
{
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer1@successive.com'
},
{
    traineeEmail: 'trainee3@successive.tech',
    reviewerEmail: 'reviewer5@successive.tech'
}
];
var validUsers=0;
var invalidUsers=0;

validateEmail=(email)=>
{
    let pattern=/^[a-zA-z0-9._]+@successive.tech$/;
    if(pattern.test(email))
    {
        return true;
        
    }
    return false;
}
validateUsers = (users)=>
{
    users.forEach(element => {
        const {traineeEmail:t,reviewerEmail:r}=element;
        if(validateEmail(t) && validateEmail(r))
       {
        validUsers+=1;
        console.log('traineeEmail:',t+"   "+'reviewerEmail:',r+'\t validUser:\t',validUsers);
        
       }
       else
       {
        invalidUsers+=1;
        console.log('traineeEmail:',t+"   "+'reviewerEmail:',r+"\t invalidUser:\t",invalidUsers);
       }
    });

}
validateUsers(users)
const validateEmail=(email:string):boolean=>
{
    let pattern=/^[a-zA-z0-9._]+@successive.tech$/;
    if(pattern.test(email))
    {
        return true;
        
    }
    return false;
}
export default validateEmail;
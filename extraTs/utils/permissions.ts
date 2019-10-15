import {permissions} from './constants';
export  const hasPermissions=(moduleName: string,role: any,permissionType: string)=>
{
    if(Object.keys(permissions).includes(moduleName))
    {
        if(Object.keys(permissions)[role].includes(permissionType))
        {
            console.log('hello');
            

        }
        else
        {
            return 'Permissions Type is not present'
        }

    }
    else{
        return 'Module is Not present';
    }
}



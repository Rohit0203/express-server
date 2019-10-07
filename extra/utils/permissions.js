import {permissions} from './constants';
const  hasPermissions=(moduleName,role,permissionType)=>
{
    if(Object.keys(permissions).includes(moduleName))
    {
        if(Object.keys(permissions[moduleName]).includes(permissionType))
        {
            if(permissions[moduleName][permissionType].includes(role))
            {
                return true;
            }
            return false;
            
        }
        else
        {
            return ('Permission type is not persent'); 
        }
       
    }
    else{
        return ('Module Name is not persent');
    }
}

export default hasPermissions;
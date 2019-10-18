<<<<<<< HEAD
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

=======
import { permissions } from './constants';
>>>>>>> Day8-39522

const { getUsers } = permissions;
export const hasPermissions = (
  moduleName: string,
  role: string,
  permissionType: string
) => {
    if(permissions.hasOwnProperty(moduleName)){
        if(permissions[moduleName].hasOwnProperty(permissionType)) {
            if(permissions[moduleName][permissionType].includes(role)) {
                return true
            } else {
                return false
            }
        } else {
           return false
        }
    } else {
       return false
    }
};

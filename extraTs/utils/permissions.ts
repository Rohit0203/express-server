import { permissions } from './constants';
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

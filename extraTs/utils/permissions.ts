import {permissions} from './constants';
export  const hasPermissions=(moduleName: string,role: any,permissionType: string)=>

    console.log((Object.keys(permissions).includes(moduleName)));



import {drawEquilateral,drawDiamond} from './patterns/index';
import {hasPermissions,validateUsers} from './utils/index';
import {permissions,users} from './utils/constants'

// console.log(hasPermissions('getUsers','trainee','read')); // for permissions 

// validateUsers(users)

/* THIS IS FOR DRAWING PATTERN */
// let rows =process.argv[2]
// if(rows<11 && rows>2)
// {
//     drawDiamond(rows);
//     drawEquilateral(rows);
// }
// else
// {
//  console.error('Rows should be in between 2 to 10');
 
// }
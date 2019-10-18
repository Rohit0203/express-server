import { DrawDiamond, DrawEquilateral } from './patterns/index';
import { hasPermissions, User } from './utils/index';


import { users } from './utils/constants';

const dd = new DrawDiamond();
const de = new DrawEquilateral();
const user = new User();
user.validateUsers(users);
hasPermissions('getUsers', 'trainee', 'read');

/* THIS IS FOR DRAWING PATTERN */
let rows: number = parseInt(process.argv[2]);
if (rows < 11 && rows > 2) {
  dd.draw(rows);
  de.draw(rows);
} else {
  console.error('Rows should be in between 2 to 10');
}

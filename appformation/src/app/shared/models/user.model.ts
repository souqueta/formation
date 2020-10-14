import { StateRole } from '../enums/state-role.enum';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
    id: number;
    username: string;
    password: string;
    role: StateRole;

  constructor(obj?: Partial<User>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }

}

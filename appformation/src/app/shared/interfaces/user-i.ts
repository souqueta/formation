import { StateRole } from '../enums/state-role.enum';
export interface UserI {
  id: number,
  username: string,
  password: string,
  role: StateRole,
}

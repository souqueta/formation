import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  state: string;
  tva: 20;
  name: string;
  ca: number;
  comment: string;
  id: number;

  total(): number
}

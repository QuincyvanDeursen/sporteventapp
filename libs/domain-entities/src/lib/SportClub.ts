import { Settlement } from './Settlement';

export interface SportClub {
  id: string;
  name: string;
  Settlements: Settlement[];
  website: string;
}

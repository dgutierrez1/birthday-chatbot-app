import { Person } from './person';

export class Team {

  name: string;
  members?: Person[];
  _id?: string;

  constructor(name: string) {
    this.name = name;
  }
}

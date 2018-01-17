import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Team } from '../../models/team';

@Injectable()
export class TeamsService {

  constructor(public db: DatabaseService) { }

  public getTeams(): Array<Team>{
    return this.db.getTeams();
  }
  createTeam(teamData){
    let newTeam: Team = {
      name: teamData.name
    };

    this.db.postNewTeam(newTeam);
  }

}

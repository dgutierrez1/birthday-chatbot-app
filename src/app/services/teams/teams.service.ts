import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Team } from '../../models/team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService {

  constructor(public db: DatabaseService) { }

  public getTeams(): Observable<Team>{
    return this.db.getTeams();
  }
  createTeam(teamData){
    let newTeam = new Team(teamData.name)

    if(newTeam){
      this.db.postNewTeam(newTeam);
    }
  }

}

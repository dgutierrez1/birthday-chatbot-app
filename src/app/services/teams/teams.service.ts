import { DataService } from '../data/data.service';
import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Team } from '../../models/team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService {

  constructor(public db: DatabaseService, public dataService: DataService) { }

  public getTeams(): Observable<Team> {
    return this.db.getTeams();
  }
  createTeam(teamData) {
    const newTeam: Team = {
      name: teamData.name
    };

    if (newTeam) {
      this.db.postNewTeam(newTeam).subscribe(
        (res) => {
          alert(res);
          this.dataService.refreshTeamView();
      }, (err) => {
        console.log(err);
      });
    }
  }

  modifyTeam(team: Team){
    this.db.modifyTeam(team).subscribe(res => console.log("MODIFY TEAM RES", res));
  }

  deleteTeam(teamId: string){
    this.db.deleteTeam(teamId).subscribe(res => console.log("DELETE TEAM RES",res));
  }

}

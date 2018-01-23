import { DataService } from '../data/data.service';
import { Injectable } from '@angular/core';
import { Team } from '../../models/team';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamsService {

  constructor(public dataService: DataService, private http: HttpClient) { }

  public getTeams(): Observable<any> {
    const getUrl = environment.serverUrl + '/teams';
    return this.http.get(getUrl);
  }
  createTeam(teamData) {
    const newTeam: Team = {
      name: teamData.name,
    };

    const postUrl = environment.serverUrl + '/teams';
    this.http.post(postUrl, newTeam).subscribe(
      (res) => {
        alert(res);
        this.dataService.refreshTeamView();
      },
      (err) => {
        console.log(err);
      });

  }

  modifyTeam(team: Team) {
    const putUrl = environment.serverUrl + '/teams';
    this.http.put(putUrl, team).subscribe(res => console.log('MODIFY TEAM RES', res));
  }

  deleteTeam(teamId: string) {
    const deleteUrl = `${environment.serverUrl}/teams/${teamId}`;
    this.http.delete(deleteUrl).subscribe(res => console.log('DELETE TEAM RES', res));
  }

}

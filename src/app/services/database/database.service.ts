import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../models/person';
import { Team } from '../../models/team';
import { mock } from './mock.persistence';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  serverUrl: string;
  mockTesting = true;
  constructor(private http: HttpClient) {
    if (this.mockTesting) {
      this.serverUrl = 'http://localhost:3000';
    } else {
      this.serverUrl = 'http://172.28.200.57:3000';
    }
  }

  postNewPerson(person: Person): Observable<any> {
    const postUrl = this.serverUrl + '/person';
    return this.http.post( postUrl, person);
  }

  postNewTeam(team: Team): Observable<any> {
    const postUrl = this.serverUrl + '/team';
    const finalTeam = JSON.stringify(team);
    console.log('NEW TEAM', team);
    return this.http.post( postUrl, team);
  }

  getTeams(): Observable<any> {
    const getUrl = this.serverUrl + '/team';
    return this.http.get( getUrl);
  }

  getPersons(): Observable<any>{
    let getUrl = this.serverUrl + "/person";
    return this.http.get( getUrl);
  }

  getPersonBirthday(): Observable<any> {
    const getUrl = this.serverUrl + '/person_birthday';
    return this.http.get(getUrl);
  }

  getMessagesByPerson(personId: string): Observable<any>{
    let getUrl = this.serverUrl + "/messages/person";
    return this.http.post( getUrl, personId);
  }

}

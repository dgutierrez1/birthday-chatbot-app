import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../models/person';
import { Team } from '../../models/team';

@Injectable()
export class DatabaseService {

  serverUrl: string
  constructor(private http: HttpClient) { 
    this.serverUrl = "http://172.28.200.57:3000";
  }


  postNewPerson(person: Person){
    let postUrl = this.serverUrl + "person/create";

    this.http.post( postUrl, person)
      .subscribe((res) => {
        alert(res)
        console.log(res);
      });
  }

  postNewTeam(team: Team){
    let postUrl = this.serverUrl + "team/create";

    this.http.post( postUrl, team)
      .subscribe((res) => {
        alert(res)
        console.log(res);
      });
  }

  getTeams(): Array<Team>{
    // let getUrl = this.serverUrl + "team/list";
    // let teams: Array<Team>;
    // this.http.get( getUrl)
    //   .subscribe((res: Array<Team>) => {
    //     alert(res)
    //     console.log(res);
    //     if(res){
    //       teams = res;
    //     } else{
    //       alert('No se han encontrado datos');
    //     }
    //   });
    // return teams;  

    return [
      {
        name: 'Microsoft',
        _id: '1'
      },
      {
        name: 'Deloitte',
        _id: '2'
      },
      {
        name: 'Copa',
        _id: '3'
      }
      ,{
        name: 'CoreOS',
        _id: '4'
      }
    ]
  }

  getPersons(): Array<Person>{
    let getUrl = this.serverUrl + "person/list";
    let persons: Array<Person>;
    this.http.get( getUrl)
      .subscribe((res: Array<Person>) => {
        alert(res)
        console.log(res);
        if(res){
          persons = res;
        } else{
          alert('No se han encontrado datos');
        }
      });
    return persons;  
  }

  getMessagesByPerson(personId: string): Array<string>{
    let getUrl = this.serverUrl + "messages/person";
    let messages: Array<string>;
    this.http.post( getUrl, personId)
      .subscribe((res: Array<string>) => {
        alert(res)
        console.log(res);
        if(res){
          messages = res;
        } else{
          alert('No se han encontrado datos');
        }
      });
    return messages;  
  }

}

import { Injectable } from '@angular/core';
import { Person } from '../../models/person';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PeopleService {



  constructor(private http: HttpClient) {}

  createPerson(personData) {
    const newPerson = new Person(
      personData.email,
      personData.name,
      personData.birthday,
      personData.team._id,
    );

    const postUrl = environment.serverUrl + '/person';
    this.http.post(postUrl, newPerson).subscribe(obj => console.log(obj));

  }

  getPeople(): Observable < any > {
    const getUrl = environment.serverUrl + '/person';
    return this.http.get(getUrl);
  }

  getPeopleBirthday(): Observable < any > {
    const getUrl = environment.serverUrl + '/listMessages';
    const peopleBirthdayList = this.http.get(getUrl);
    peopleBirthdayList.subscribe(res => console.log('PEOPLE BIRTHDAY LISTA RES', res));
    return peopleBirthdayList;
  }

  modifyPerson(person: Person) {
    const putUrl = environment.serverUrl + '/person';
    this.http.put(putUrl, person).subscribe(res => console.log('MODIFY PERSON RESP', res));
  }
  deletePerson(personId: string) {
    const deleteUrl = environment.serverUrl + '/person/';
    this.http.delete(deleteUrl, {
      params: {
        _id: personId
      }
    }).subscribe(res => console.log('DELETE PERSON RESP', res));
  }
}

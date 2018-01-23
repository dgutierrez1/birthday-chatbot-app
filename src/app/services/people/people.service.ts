import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Person } from '../../models/person';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {

  backendUrl: string;

  constructor(public db: DatabaseService, private http: HttpClient) {
    this.backendUrl = 'http://172.28.200.57:3000';
  }

  createPerson(personData) {
    const newPerson = new Person(
      personData.email,
      personData.name,
      personData.birthday,
      personData.team._id,
    );

    const postUrl = this.backendUrl + '/person';
    this.http.post(postUrl, newPerson).subscribe(obj => console.log(obj));

  }

  getPeople(): Observable < Person > {
    return this.db.getPersons();
  }

  getPeopleBirthday(): Observable < any > {
    const peopleBirthdayList = this.db.getPersonBirthday();
    peopleBirthdayList.subscribe(res => console.log('PEOPLE BIRTHDAY LISTA RES', res));
    return peopleBirthdayList;
  }

  modifyPerson(person: Person) {
    this.db.modifyPerson(person).subscribe(res => console.log('MODIFY PERSON RESP', res));
  }
  deletePerson(personId: string) {
    this.db.deletePerson(personId).subscribe(res => console.log('DELETE PERSON RESP', res));
  }
}

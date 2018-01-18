import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Person } from '../../models/person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleService {

  constructor(public db: DatabaseService) { }

  createPerson(personData){
    let newPerson = new Person(
      personData.email,
      personData.name,
      personData.birthday,
      personData.team._id
    );
    
    if(newPerson){
      this.db.postNewPerson(newPerson).subscribe(obj => console.log(obj));

    }
  }

  getPeople(): Observable<Person>{
    return this.db.getPersons();
  }

  getPeopleBirthday(): Observable<any>{
    const peopleBirthdayList = this.db.getPersonBirthday();
    peopleBirthdayList.subscribe(res => console.log("PEOPLE BIRTHDAY LISTA RES", res) );
    return peopleBirthdayList;
  }

  modifyPerson(person: Person){
    this.db.modifyPerson(person).subscribe(res => console.log("MODIFY PERSON RESP", res));
  }
  deletePerson(personId: string){
    this.db.deletePerson(personId).subscribe(res => console.log("DELETE PERSON RESP",res));
  }



}

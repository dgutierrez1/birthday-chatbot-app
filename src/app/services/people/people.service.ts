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
      this.db.postNewPerson(newPerson);
    }
  }

  getPeople(): Observable<Person>{
    return this.db.getPersons();
  }



}

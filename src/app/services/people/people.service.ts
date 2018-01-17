import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Person } from '../../models/person';

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
    
    console.log(newPerson);
    
    // if(newPerson){
    //   this.db.postNewPerson(newPerson);
    // }
  }


}

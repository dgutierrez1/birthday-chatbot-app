import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BirthdaysService {

  constructor(public databaseService: DatabaseService) { }

  getBirthdayMessagesByListId(listId: string): Observable<any>{
    const personBirthdayMessages = this.databaseService.getMessagesByPerson(listId);
    personBirthdayMessages.subscribe(obj => console.log("MESSAGES FROM PERSON OBS",obj));
    return personBirthdayMessages;
  }

}

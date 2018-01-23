import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BirthdaysService {

  constructor(private http: HttpClient) { }

  getBirthdayMessagesByListId(listId: string): Observable<any> {
    const getUrl =  `${environment.serverUrl}/messages/${listId}`;
    const personBirthdayMessages = this.http.get(getUrl)
    personBirthdayMessages.subscribe(obj => console.log('MESSAGES FROM PERSON OBS', obj));
    return personBirthdayMessages;
  }

  getBirthdays(): Observable < any > {
    const getUrl = environment.serverUrl + '/birthdays';
    const peopleBirthdayList = this.http.get(getUrl);
    peopleBirthdayList.subscribe(res => console.log('BIRTHDAY LISTA RES', res));
    return peopleBirthdayList;
  }

}

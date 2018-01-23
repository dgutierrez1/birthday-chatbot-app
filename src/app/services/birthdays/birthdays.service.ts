import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BirthdaysService {

  constructor(private http: HttpClient) { }

  getBirthdayMessagesByListId(listId: string): Observable<any> {
    const getUrl = environment.serverUrl + '/message';
    const personBirthdayMessages = this.http.get(getUrl, {
      params:  {
        _id: listId,
      },
    });
    personBirthdayMessages.subscribe(obj => console.log('MESSAGES FROM PERSON OBS', obj));
    return personBirthdayMessages;
  }

}

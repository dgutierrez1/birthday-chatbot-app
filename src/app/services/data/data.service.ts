import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  public teamsSubject: Subject<any>;

  constructor() {
    this.teamsSubject = new Subject();
   }

  refreshTeamView(){
    this.teamsSubject.next(true);
  }

}

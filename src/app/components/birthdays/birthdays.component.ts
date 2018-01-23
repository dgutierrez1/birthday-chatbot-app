import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';
import { BirthdaysService } from '../../services/birthdays/birthdays.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css'],
})
export class BirthdaysComponent implements OnInit {

  private selectedPerson;
  birthdays: Observable<any>;
  private messagesSelectedPerson: Observable<any>;


  constructor(public peopleService: PeopleService, public birthdayService: BirthdaysService) { }

  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    this.birthdays = this.birthdayService.getBirthdays();
  }

  personWasSelected(selectedPerson) {
    this.selectedPerson = selectedPerson;
    this.messagesSelectedPerson = this.birthdayService.getBirthdayMessagesByListId(selectedPerson._id);
  }

}

import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';
import { BirthdaysService } from '../../services/birthdays/birthdays.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css'],
})
export class BirthdaysComponent implements OnInit {

  private selectedPerson;
  people;
  private messagesSelectedPerson;


  constructor(public peopleService: PeopleService, public birthdayService: BirthdaysService) { }

  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    this.people = this.peopleService.getPeopleBirthday();
  }

  personWasSelected(selectedPerson) {
    this.selectedPerson = selectedPerson;
    this.birthdayService.getBirthdayMessagesByListId(selectedPerson._id).subscribe(
      (msgs) => {
        this.messagesSelectedPerson = msgs;
      });
  }

}

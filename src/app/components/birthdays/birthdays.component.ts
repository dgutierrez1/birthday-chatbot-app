import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {

  private selectedPerson;
  people;

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }
  getPeople(){
    this.people = this.peopleService.getPeople();
  }

  personWasSelected(selectedPerson){
    this.selectedPerson = selectedPerson;
  }

}

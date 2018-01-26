import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '../../services/teams/teams.service';
import { Team } from '../../models/team';
import { PeopleService } from '../../services/people/people.service';
import { DataService } from '../../services/data/data.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/person';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {


  private creatingTeam: boolean;

  personBeingModified;

  modifyingPerson: boolean;

  teams: Observable<Team>;
  people: Observable<Person>;

  personForm: FormGroup;
  teamForm: FormGroup;

  @ViewChild('datePicker') datePicker: ElementRef;
  teamSelect;

  constructor(
    private fb: FormBuilder,
    public teamsService: TeamsService,
    public peopleService: PeopleService,
    public dataService: DataService,
  ) {



  }

  ngOnInit() {

    this.personForm = this.generateFormGroup({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      birthday: [Validators.required],
      team: [Validators.required],
    })
    this.teamForm = this.generateFormGroup({
      name: [null, Validators.required],
    });

    this.creatingTeam = false;
    this.modifyingPerson = false;

    this.getTeams();
    this.dataService.teamsSubject.subscribe((broadcast) => {
      if (broadcast) {
        this.getTeams();
      }
    });
  }
  getTeams() {
    this.teams = this.teamsService.getTeams();
    this.teams.subscribe((t) => {
      console.log('TEAMS VISTA', t);
    });

  }
  generateFormGroup(formControls):FormGroup{
    return this.fb.group(formControls);
  }

  resetPersonForm() {
    this.personForm.reset();
  }

  resetTeamForm() {
    this.teamForm.reset();
  }
  createPerson(formValue) {
    this.peopleService.createPerson(formValue);
    this.resetPersonForm();
  }
  createTeam(formValue) {
    this.teamsService.createTeam(formValue);
    this.resetTeamForm();
  }

  enableCreateTeam() {
    this.creatingTeam = true;
  }
  disableCreateTeam() {
    this.creatingTeam = false;
  }

  cancelPersonModification() {
    this.modifyingPerson = false;
    this.personForm.reset();
  }
  modifyPerson(person) {
    this.peopleService.modifyPerson(person);
  }
  deletePerson(person) {
    this.peopleService.deletePerson(person._id);
  }

  modifyTeam(team) {
    this.teamsService.modifyTeam(team);
  }

  deleteTeam(team) {
    this.teamsService.deleteTeam(team._id);
  }

  personForModificationSelected(person: Person) {
    this.people = undefined;
    this.modifyingPerson = true;
    this.personBeingModified = person;

    this.personForm.setValue({
      name: person.name,
      email: person.email,
      teamId: person.team._id,
      birthday: person.birthdate,
    });

    this.datePicker.nativeElement.value = person.birthdate;
    console.log(this.personForm.get('birthday').value);

  }
  showPeopleList() {
    this.people = this.peopleService.getPeople();
    this.people.subscribe(ppl=> {console.log("PEOPLE RES",ppl)});
  }
  hidePeopleList() {
    this.people = undefined;
  }
}

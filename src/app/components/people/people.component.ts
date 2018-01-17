import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '../../services/teams/teams.service';
import { Team } from '../../models/team';
import { PeopleService } from '../../services/people/people.service';
import { DataService } from '../../services/data/data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  
  private creatingTeam: boolean
  
  teams: Observable<Team>;

  personForm: FormGroup;
  teamForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    public teamsService: TeamsService, 
    public peopleService: PeopleService,
    public dataService: DataService
  ) { 
    this.creatingTeam = false;


    this.personForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      birthday: [ Validators.required],
      team: [ Validators.required]
    })
    this.teamForm = this.fb.group({
      name: [null, Validators.required],
    });

  }
  
  ngOnInit() {
    this.getTeams()

    this.dataService.teamsSubject.subscribe((broadcast) => {
      if(broadcast){
        this.getTeams();
      }
    })
  }
  getTeams(){
    this.teams = this.teamsService.getTeams()
    this.teams.subscribe((t)=> {

      console.log("TEAMS VISTA", t);
    });
  }

  resetPersonForm(){
    this.personForm.reset();
  }

  resetTeamForm(){
    this.teamForm.reset();
  }
  createPerson(formValue){
    this.peopleService.createPerson(formValue);
    this.resetPersonForm();
  }
  createTeam(formValue){
    this.teamsService.createTeam(formValue);
    this.resetTeamForm();
  }

  enableCreateTeam(){
    this.creatingTeam = true;
  }
  disableCreateTeam(){
    this.creatingTeam = false;
  }



}

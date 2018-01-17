import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '../../services/teams/teams.service';
import { Team } from '../../models/team';
import { PeopleService } from '../../services/people/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  
  private creatingTeam: boolean
  
  teams: Array<Team>;

  personForm: FormGroup;
  teamForm: FormGroup;

  constructor(private fb: FormBuilder, public teamsService: TeamsService, public peopleService: PeopleService) { 
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

    this.teams = this.teamsService.getTeams();
  }

  ngOnInit() {
    
  }

  resetPersonForm(){
    this.personForm.reset();
  }

  resetTeamForm(){
    this.teamForm.reset();
  }
  createPerson(formValue){
    this.peopleService.createPerson(formValue);
  }
  createTeam(formValue){
    this.teamsService.createTeam(formValue);
  }

  enableCreateTeam(){
    this.creatingTeam = true;
  }
  disableCreateTeam(){
    this.creatingTeam = false;
  }



}

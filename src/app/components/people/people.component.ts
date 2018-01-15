import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  

  personForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.personForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      birthday: [ Validators.required],
    })
  }

  ngOnInit() {
  }

  reset(){
    this.personForm.reset();
  }
  createPerson(formValue){
    console.log(formValue);
  }


}

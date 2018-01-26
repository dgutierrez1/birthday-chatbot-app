import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { TestingModule } from '../../testing/testing.module';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('People panel', () => {
    describe('personForm', () => {
      it('should be instance of FormGroup', () => {
        expect(component.personForm instanceof FormGroup).toBeTruthy();
      });

      it('should create FormControls with ["name", "email", "birthday", "team"] keys', () => {

        let formControls = {
          name: [null, Validators.required],
          email: [null, Validators.compose([Validators.required, Validators.email])],
          birthday: [Validators.required],
          team: [Validators.required],
        }

        component.personForm = component.generateFormGroup(formControls)

        expect(Object.keys(component.personForm.controls)).toEqual(Object.keys(formControls));
      });
    });

  

  });

  describe('Team panel', () => {

    

    describe('teamForm', () => {
      it('should be instance of FormGroup', () => {
        expect(component.teamForm instanceof FormGroup).toBeTruthy();
      });

      it('should create FormControls with ["name"] keys', () => {

        let formControls = {
          name: [null, Validators.required]
        }
        console.log("SELEECTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT", fixture.debugElement.query(By.css('#teamsSelect')));
        component.teamForm = component.generateFormGroup(formControls)

        expect(Object.keys(component.teamForm.controls)).toEqual(Object.keys(formControls));
      });
    });

  });
});

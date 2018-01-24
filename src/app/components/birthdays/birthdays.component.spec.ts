import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysComponent } from './birthdays.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestingModule } from '../../testing/testing.module';


describe('BirthdaysComponent', () => {
  let component: BirthdaysComponent;
  let fixture: ComponentFixture<BirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

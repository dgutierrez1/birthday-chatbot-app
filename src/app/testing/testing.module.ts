import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../services/teams/teams.service';
import { BirthdaysService } from '../services/birthdays/birthdays.service';
import { PeopleService } from '../services/people/people.service';
import { ErrorService } from '../services/error/error.service';
import { DataService } from '../services/data/data.service';
import { AppComponent } from '../app.component';
import { RouterService } from '../services/router/router.service';
import { RouterTestingModule } from '@angular/router/testing';
import { plainRoutes } from '../app.router';
import { HomeComponent } from '../components/home/home.component';
import { PanelComponent } from '../components/panel/panel.component';
import { BirthdaysComponent } from '../components/birthdays/birthdays.component';
import { PeopleComponent } from '../components/people/people.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


export const TestingModule = {
  imports: [
    CommonModule,
    RouterTestingModule.withRoutes(plainRoutes),
    HttpClientModule,
  ],
  // exports: [
  //   TeamsService,
  //   PeopleService
  // ],
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    BirthdaysComponent,
    PeopleComponent,
  ],
  providers: [
    RouterService,
    TeamsService,
    BirthdaysService,
    PeopleService,
    ErrorService,
    DataService,
    FormBuilder,
    HttpClient,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],

};

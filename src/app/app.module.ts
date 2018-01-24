import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { routes } from './app.router';
import { MaterialModule } from './material.module';
import { RouterService } from './services/router/router.service';
import { DateAdapter } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelComponent } from './components/panel/panel.component';
import { TeamsService } from './services/teams/teams.service';
import { BirthdaysService } from './services/birthdays/birthdays.service';
import { PeopleService } from './services/people/people.service';
import { ErrorService } from './services/error/error.service';
import { DataService } from './services/data/data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    TeamsComponent,
    BirthdaysComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [RouterService, TeamsService, BirthdaysService, PeopleService, ErrorService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    TeamsComponent,
    BirthdaysComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { PeopleComponent } from './components/people/people.component';
import { TeamsComponent } from './components/teams/teams.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'birthdays', component: BirthdaysComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
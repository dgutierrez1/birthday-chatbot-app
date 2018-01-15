import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class MaterialModule { }

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
  MatNativeDateModule,
  MatChipsModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [],
})
export class MaterialModule { }

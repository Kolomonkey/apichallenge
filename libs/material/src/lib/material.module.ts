import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ]
})
export class MaterialModule {}

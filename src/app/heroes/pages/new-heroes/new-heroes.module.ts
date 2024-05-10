import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PipesModule } from '../../pipes/pipes.module';
import { NewHeroesComponent } from './new-heroes.component';
import { ConfirmDialogModule } from '../../components/confirm-dialog/confirm-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: NewHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewHeroesRoutingModule {}

@NgModule({
  declarations: [NewHeroesComponent],
  exports: [NewHeroesComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    NewHeroesRoutingModule,
    PipesModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    ConfirmDialogModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class NewHeroesModule {}

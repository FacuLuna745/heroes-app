import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroCardModule } from '../../components/hero-card/hero-card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesListRoutingModule {}

@NgModule({
  declarations: [HeroesListComponent],
  exports: [HeroesListComponent],
  imports: [
    CommonModule,
    HeroesListRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    HeroCardModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class HeroesListModule {}

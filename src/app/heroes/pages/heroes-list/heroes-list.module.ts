import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, HeroesListRoutingModule],
})
export class HeroesListModule {}

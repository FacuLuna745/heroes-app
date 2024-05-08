import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHeroesComponent } from './new-heroes.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, NewHeroesRoutingModule],
})
export class NewHeroesModule {}

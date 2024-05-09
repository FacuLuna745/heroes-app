import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPageComponent } from './hero-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroPageRoutingModule {}

@NgModule({
  declarations: [HeroPageComponent],
  exports: [HeroPageComponent],
  imports: [
    CommonModule,
    MatListModule,
    PipesModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HeroPageRoutingModule,
  ],
})
export class HeroPageModule {}

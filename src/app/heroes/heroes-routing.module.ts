import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/heroes-list/heroes-list.module').then(
            (m) => m.HeroesListModule
          ),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./pages/new-heroes/new-heroes.module').then(
            (m) => m.NewHeroesModule
          ),
      },
      {
        path: 'update',
        loadChildren: () =>
          import('./pages/new-heroes/new-heroes.module').then(
            (m) => m.NewHeroesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}

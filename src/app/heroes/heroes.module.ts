import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  imports: [CommonModule, HeroesRoutingModule, CoreModule],
})
export class HeroesModule {}

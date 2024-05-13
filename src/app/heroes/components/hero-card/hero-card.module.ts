import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [HeroCardComponent],
  exports: [HeroCardComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
  ],
})
export class HeroCardModule {}

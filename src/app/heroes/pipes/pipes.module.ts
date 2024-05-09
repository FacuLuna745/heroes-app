import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImagePipe } from './hero-image.pipe';

@NgModule({
  declarations: [HeroImagePipe],
  exports: [HeroImagePipe],
  imports: [CommonModule],
})

export class PipesModule {}

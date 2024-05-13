import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PepeComponent } from './pepe/pepe.component';

@NgModule({
  declarations: [Error404PageComponent, PepeComponent],
  exports: [Error404PageComponent],
  imports: [CommonModule],
})
export class SharedModule {}

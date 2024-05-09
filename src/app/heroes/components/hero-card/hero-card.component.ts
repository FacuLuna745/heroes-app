import { Hero } from './../../interfaces/hero.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})

export class HeroCardComponent implements OnInit {
  @Input() public hero!: Hero;

  public ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }
}

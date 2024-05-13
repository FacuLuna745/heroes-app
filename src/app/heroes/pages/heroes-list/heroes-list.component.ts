import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  public heroes: Array<Hero> = [];
  public isLoading: boolean = false;
  public searchHero: FormControl = new FormControl('');

  public constructor(private heroesService: HeroesService) {}

  public ngOnInit(): void {
    this.fetchAllHeroes();
    this.searchHero.valueChanges.subscribe((heroName: string) =>
      this.searchHeroes(heroName)
    );
  }

  public fetchAllHeroes(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => {
        this.isLoading = true;
        this.heroes = heroes;
      });
  }

  public searchHeroes(query: string): void {
    if (!query) {
      this.fetchAllHeroes();
      return;
    }

    this.heroesService.getHeroSearch(query).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  public heroes: Array<Hero> = [];
  public searchHero: FormControl = new FormControl('');
  public loading: boolean = false;

  public constructor(private heroesService: HeroesService) {}

  public ngOnInit(): void {
    this.fetchAllHeroes();
    this.searchHero.valueChanges
      .pipe(debounceTime(300))
      .subscribe((heroName: string) => this.searchHeroes(heroName));
  }

  public fetchAllHeroes(): void {
    this.loading = true;
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.loading = false;
    });
  }

  public fillHeroListByName(): void {
    let heroSelected = this.searchHero.valueChanges.subscribe((value) => {
      console.log(value, 'dentro de el subs');
    });
    console.log(heroSelected);
  }

  public searchHeroes(query: string): void {
    if (!query) {
      this.fetchAllHeroes();
      return;
    }

    this.loading = true;
    this.heroesService.getHeroSearch(query).subscribe((heroes) => {
      this.heroes = heroes;
      this.loading = false;
    });
  }
}

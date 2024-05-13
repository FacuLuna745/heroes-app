import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { Hero, Publisher } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return a list of heroes', () => {

    const mockHeroes: Hero[] = [{ id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: Publisher.DCComics,
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }];


    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(1);
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpTestingController.expectOne(`${environments.baseUrl}/heroes`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockHeroes);
  });

  it('should return a single hero or undefined', () => {

    const mockHero: Hero = { id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: Publisher.DCComics,
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." };

    service.getHeroById('1').subscribe(hero => {
      expect(hero).toEqual(mockHero);
    });

    const req = httpTestingController.expectOne(`${environments.baseUrl}/heroes/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockHero);

    service.getHeroById('2').subscribe(hero => {
      expect(hero).toBeUndefined();
    });

    const reqError = httpTestingController.expectOne(`${environments.baseUrl}/heroes/2`);
    reqError.flush(null, { status: 404, statusText: 'Not Found' });
  });

  it('should add a hero and return it', () => {

    const newHero: Hero = { id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: Publisher.DCComics,
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." };

    service.addHero(newHero).subscribe(hero => {
      expect(hero).toBe(newHero);
    });

    const req = httpTestingController.expectOne(`${environments.baseUrl}/heroes`);
    expect(req.request.method).toEqual('POST');
    req.flush(newHero);
  });

  it('should update a hero and return it', () => {
    const updatedHero: Hero = { id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: Publisher.MarvelComics,
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    alt_img: '',
    characters: "Matthew Michael Murdock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." };

    service.updateHero(updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    });

    const req = httpTestingController.expectOne(`${environments.baseUrl}/heroes/${updatedHero.id}`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(updatedHero);
  });

  it('should delete a hero and return true on success', () => {
    service.deleteHeroById('marvel-daredevil').subscribe(result => {
      expect(result).toBeTrue();
    });

    const req = httpTestingController.expectOne(`${environments.baseUrl}/heroes/marvel-daredevil`);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });
});

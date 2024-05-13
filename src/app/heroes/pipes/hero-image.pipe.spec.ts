import { HeroImagePipe } from './hero-image.pipe';
import { Hero, Publisher } from '../interfaces/hero.interface';

describe('HeroImagePipe', () => {
  let pipe: HeroImagePipe;

  beforeEach(() => {
    pipe = new HeroImagePipe();
  });

  it('should return default image when hero has no id and no alt_img', () => {
    const result = pipe.transform({
      id: '',
      superhero: 'Unknown Hero',
      publisher: Publisher.DCComics,
      alter_ego: 'Unknown',
      first_appearance: 'N/A',
      characters: 'None',
      description: 'No description'
    } as Hero);
    expect(result).toBe('assets/images/no-image.png');
  });

  it('should return the alt_img if provided', () => {
    const heroWithAltImg: Hero = {
      id: 'dc-batman',
      superhero: 'Batman',
      publisher: Publisher.DCComics,
      alter_ego: 'Bruce Wayne',
      first_appearance: '1939',
      characters: 'Bruce Wayne',
      description: 'Billionaire vigilante',
      alt_img: 'http://example.com/image.jpg'
    };

    const result = pipe.transform(heroWithAltImg);
    expect(result).toBe('http://example.com/image.jpg');
  });

  it('should return image based on the hero id if no alt_img is provided', () => {
    const heroWithId: Hero = {
      id: 'dc-superman',
      superhero: 'Superman',
      publisher: Publisher.DCComics,
      alter_ego: 'Clark Kent',
      first_appearance: '1938',
      characters: 'Clark Kent',
      description: 'Man of Steel',
    };
    const result = pipe.transform(heroWithId);
    expect(result).toBe(`assets/images/heroes/${heroWithId.id}.jpg`);
  });
});

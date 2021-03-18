import {Injectable} from '@angular/core';
import {findIndex} from 'rxjs/operators';

@Injectable()
export class HeroesService {

  private heroes: Hero[] = [
    {
      name: 'Aquaman',
      bio: 'Aquaman´s most recognized power is the telepathic ability to communicate with sea life, which he can summon from great distances.',
      img: 'assets/img/aquaman.png',
      add: '1941-11-01',
      home: 'DC'
    },
    {
      name: 'Batman',
      bio: 'Batman´s main traits are summed up as "physical prowess, deductive skills, and obsession". Most of the basic characteristics in the comics have varied because of the different interpretations given to the character.',
      img: 'assets/img/batman.png',
      add: '1939-05-01',
      home: 'DC'
    },
    {
      name: 'Daredevil',
      bio: 'Having lost his sight, Daredevil´s four remaining senses were enhanced by radiation to superhuman levels in the accident he had as a child. Despite his blindness, he can "see" through a "sixth sense" that serves as a bat-like radar.',
      img: 'assets/img/daredevil.png',
      add: '1964-01-01',
      home: 'Marvel'
    },
    {
      name: 'Hulk',
      bio: 'His main power is his ability to increase his strength to virtually limitless levels while increasing his fury. Depending on which Hulk personality is in charge at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).',
      img: 'assets/img/hulk.png',
      add: '1962-05-01',
      home: 'Marvel'
    },
    {
      name: 'Linterna Verde',
      bio: 'Possessor of the power ring who possesses the ability to create manifestations of solid light through the use of thought. He is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a lamp maker named Chang)',
      img: 'assets/img/linterna-verde.png',
      add: '1940-06-01',
      home: 'DC'
    },
    {
      name: 'Spider-Man',
      bio: 'After being bitten by a radioactive spider, he gained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man´s strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man can perform incredible jumps. A "spider-sense", which allows him to know if a danger is looming over him, before it happens. This can sometimes lead Spider-Man to the source of the danger.',
      img: 'assets/img/spiderman.png',
      add: '1962-08-01',
      home: 'Marvel'
    },
    {
      name: 'Wolverine',
      bio: 'In the fictional Marvel universe, Wolverine possesses regenerative powers that can heal any wound, no matter how deadly, and that same power makes him immune to any disease on Earth and some extraterrestrials. He also possesses superhuman strength, which although it does not compare to that of other superheroes like the Hulk, it surpasses that of any human.',
      img: 'assets/img/wolverine.png',
      add: '1974-11-01',
      home: 'Marvel'
    }
  ];

  constructor() {
    console.log('Ready!!');
  }

  getHeroes(): Hero[]{
    for (let i = 0; i < this.heroes.length; i++) {
      this.heroes[i].idx = i;
    }
    return this.heroes;
  }

  getHero(moon: number): any{
    return this.heroes[moon];
  }

  searchHeroes(term: string): Hero[] {
    const heroesArr: Hero[] = [];
    term = term.toLowerCase();
    for (let i = 0; i < this.heroes.length; i++) {
      let hero: any = {};
      this.heroes[i].idx = i;
      hero = this.heroes[i];
      const name = hero.name.toLowerCase();
      if ( name.indexOf(term) >= 0 ) {
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }
}

export interface Hero {
  name: string;
  bio: string;
  img: string;
  add: string;
  home: string;
  idx?: number;
}

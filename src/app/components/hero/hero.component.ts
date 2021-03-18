
import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService){
      this.activatedRoute.params.subscribe(params => {
        // console.log(params[`id`]);
        this.hero = this.heroesService.getHero( params[`id`] );
      });
  }
}

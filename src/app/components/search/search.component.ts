import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Hero[] = [];
  public term = '';

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        console.log(params[`term`]);
        this.heroes = this.heroesService.searchHeroes(params[`term`]);
        console.log(this.heroes);
        this.term = params[`term`];
        console.log(this.term);
    });
  }

  viewHero( idx: number ): void{
    console.log(idx);
    this.router.navigate( ['/hero', idx] );
  }
}

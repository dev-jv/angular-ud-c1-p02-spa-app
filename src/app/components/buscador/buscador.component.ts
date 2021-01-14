import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  public termino = '';

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        console.log(params[`term`]);
        this.heroes = this.heroesService.buscarHeroes(params[`term`]);
        console.log(this.heroes);
        this.termino = params[`term`];
        console.log(this.termino);
    });
  }

  viewHero( idx: number ): void{
    console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }
}

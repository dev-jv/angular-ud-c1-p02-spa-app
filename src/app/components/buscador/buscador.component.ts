import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  public termino = '';

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
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
}

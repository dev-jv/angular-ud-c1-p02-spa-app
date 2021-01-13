import { Component, OnInit } from '@angular/core';
import { Heroe} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): any{
    console.log(termino);
    this.router.navigate( ['/buscador', termino] );
  }
}

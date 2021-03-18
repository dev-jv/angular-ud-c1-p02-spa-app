import { Component, OnInit } from '@angular/core';
import { Hero} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchHero(term: string): any{
    console.log(term);
    this.router.navigate( ['/search', term] );
  }
}

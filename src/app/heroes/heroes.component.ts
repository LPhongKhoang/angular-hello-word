import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero: Hero;

  heroes: Hero[];
  hero: Hero = {id: 0, name: ""};

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  submit_addHero(){
    console.log(this.hero.name);
    this.heroService.addHero({name: this.hero.name} as Hero)
      .subscribe((hero) => {
          this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero){
    // this.heroes = this.heroes.filter(h => h.id != hero.id);
    this.heroService.deleteHero(hero)
      .subscribe( _ =>{
        let index = this.heroes.indexOf(hero);
        this.heroes.splice(index, 1);
      });
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
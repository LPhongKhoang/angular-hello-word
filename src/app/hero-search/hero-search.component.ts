import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before consider the term
      debounceTime(300),

      // gnore new term if same as previous terms
      distinctUntilChanged(),

      // switch to new search Observable each time the term completly new
      switchMap((term: string ) => this.heroes$ = this.heroService.searchHeroes(term))

    )
  }

  searchHero(term: string){
    // Every time the user types in the textbox, the binding calls search() with the textbox value, a "search term".
    // The searchTerms becomes an Observable emitting a steady stream of search terms.
    // push a search term to searchTerms subject
    this.searchTerms.next(term);
  }

}

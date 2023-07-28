import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
}
)

export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit: SuperHero = new SuperHero;

hero: any;

  constructor (private superheroservice: SuperHeroService) { }

  ngOnInit(): void{
   /*  this.heroes = this.superheroservice.getSuperHeroes();
    console.log(this.heroes); */
    this.superheroservice
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }
  editHero(hero: SuperHero){
   this.heroToEdit = hero;
  }
}                           
                                                                                        

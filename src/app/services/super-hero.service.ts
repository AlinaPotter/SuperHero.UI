import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';



@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";
  
  constructor(private http: HttpClient) { }

  public getSuperHeroes(): Observable<SuperHero[]> {
    
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  
    /* let hero = new SuperHero();
    hero.id = 1;
    hero.heroname = "Spider Man";
    hero.firstName = "Peter";
    hero.lastName = "Parker";
    hero.place = "NYC"; */
  // return [hero];
  
  }
  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}

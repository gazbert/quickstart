import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES); // return immediately resolved promise
    }

    // simulate a slow connection
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 0)) // delay 1000 = 1 second
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}

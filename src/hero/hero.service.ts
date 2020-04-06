import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class HeroService {
  private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  findOne(data: HeroById): Hero {
    return this.items.find(({ id }) => id === data.id);
  }

  findMany(data$: Observable<HeroById>): Observable<Hero> {
    const hero$ = new Subject<Hero>();
    const onNext = (heroById: HeroById) => {
      const item = this.items.find(({ id }) => id === heroById.id);
      hero$.next(item);
    };
    const onComplete = () => hero$.complete();
    data$.subscribe(onNext, null, onComplete);
    return hero$.asObservable();
  }

  login(data: User): User {
    return data;
  }
}
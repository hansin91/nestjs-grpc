import { Controller } from '@nestjs/common';
import { GrpcStreamMethod, GrpcMethod } from '@nestjs/microservices';
import { HeroService } from './hero.service';
import { Observable } from 'rxjs';
import { Hero } from './interfaces/hero.interface';
import { HeroById } from './interfaces/hero-by-id.interface';

@Controller()
export class HeroGrpcController {

  constructor(private readonly heroService: HeroService) {}

  @GrpcStreamMethod('HeroService')
  findMany(data$: Observable<HeroById>): Observable<Hero> {
    return this.heroService.findMany(data$);
  }

  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    return this.heroService.findOne(data);
  }
}
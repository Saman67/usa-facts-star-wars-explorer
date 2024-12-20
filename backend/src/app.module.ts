import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { StarshipsModule } from './starships/starships.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MioCompComponent } from './mio-comp/mio-comp.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroNgClassComponent } from './hero-ng-class/hero-ng-class.component';
import { PipesProvaComponent } from './pipes-prova/pipes-prova.component';

@NgModule({
  declarations: [
    AppComponent,
    MioCompComponent,
    HeroComponent,
    HeroesComponent,
    HeroNgClassComponent,
    PipesProvaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

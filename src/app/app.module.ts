import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heores/hero/hero.component';
import { ListComponent } from './heores/list/list.component';
//import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,  // si no me funciona, eliminio y pongo componente
    CounterComponent, ListComponent,
   
   
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

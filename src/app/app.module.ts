import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heores/heroes.module';
//import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,  // si no me funciona, eliminio y pongo componente
    // ListComponent,  // 
   
   
  ],
  imports: [
    BrowserModule,
    HeroesModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

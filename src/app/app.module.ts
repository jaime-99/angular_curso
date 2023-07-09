import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heores/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page.component';

//import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,  // si no me funciona, eliminio y pongo componente
    // ListComponent,  // 
    MainPageComponent
   
   
  ],
  imports: [
    BrowserModule,
    // CounterModule,
   // HeroesModule,
    DbzModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

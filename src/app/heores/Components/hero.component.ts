import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: '../hero/hero.component.html',
  styleUrls: ['../hero/hero.component.css'],
})
export class HeroComponent {


  public name:string= 'ironman';
  public age:number = 45;


  get capitalizedName(): String{
    return this.name.toUpperCase()
  }

  public getHeroDescription():string{
  
    return `${this.name} + ${this.age}`;
  }

  changeHero():void{ // cambiar nombre 
    
    this.name = "spiderman";
    
  }

  changeAge():void{ // cambiar edad 

    this.age = 25;
  }

}

import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Hola mundo';
  // public counter: number = 10;

  // // ahora agregar boton para resetarlo a 10
  // public increaseBy(value: number): void {
  //   this.counter += value;
  // }

  // public reset(): void {
  //   this.counter = 10;
  // }

  // // public decrementBy():void{
  // //   this.counter -= 1;
  // // }
}

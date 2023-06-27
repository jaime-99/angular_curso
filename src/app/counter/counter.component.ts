import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  
  template: `
    <h2>Contador:</h2>
    <h2>{{ counter }}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,

})
export class CounterComponent {
    public title: string = 'Hola mundo';
    public counter:number = 10;  
  
    // ahora agregar boton para resetarlo a 10
    public increaseBy( value: number):void{ 
      this.counter += value;
  
    }
  
    public reset(): void {
  
      this.counter = 10;
  
    }
}



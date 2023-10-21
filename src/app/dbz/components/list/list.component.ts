import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList:Character[]= [{
    name: 'trunks',
    power:10,

  }];

  //emitir este evento onDelete ,
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDelateCharacter(index:number):void{

    //todo emitir el id del personaje 
    //tarea recibiir el index e imprimir en consola
        
    this.onDelete.emit(index)


  }

}


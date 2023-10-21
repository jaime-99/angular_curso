import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {  EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  indice: number = 0;


  @Input()
  public characterList:Character[]= [{
    name: 'trunks',
    power:10,

  }];

  //emitir este evento onDelete ,
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number):void{
    //emitir el ID del personaje
    // console.log(index)
    this.onDelete.emit(index);

  }


  // public index:number = this.indice;
  @Output()
 public onDelete = new EventEmitter<number>()

  onDelateCharacter(index:number):void{

    //todo emitir el id del personaje 
    //tarea recibiir el index e imprimir en consola
        
    console.log(index)
    this.onDelete.emit(index)


  }

}


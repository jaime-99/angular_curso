import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'
})
export class DbzService {

    public characters:Character[]=[{
        id:uuid(),
        name:'Krillin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },{
        id:uuid(),
        name:'vegeta',
        power:9000,
    }];



    onNewCharacter ({name,power}: Character):void {

      const newCharacter:Character = {
        id:uuid(),
        name,
        power
      }


        this.characters.push(newCharacter);

    }


    // onDelete(index:number){
    //     this.characters.splice(index,1);
    // }

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !==id)
    }





}


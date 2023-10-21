import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'
})
export class DbzService {

    public characters:Character[]=[{

        name:'Krillin',
        power:1000
    },{
        name:'Goku',
        power:9500
    },{
        name:'vegeta',
        power:9000,
    }];
    


    onNewCharacter(character:Character):void {
        console.log(character);
        this.characters.push(character); 

    }


    onDelete(index:number){
        console.log(index);
        this.characters.splice(index,1);


    }
    



    
}


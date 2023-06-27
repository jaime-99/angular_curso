import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ['spiderman', 'ironman', 'hulk', 'she hulk', 'thor'];


  removeLastHero():void{
    this.heroNames.pop();
  }


}


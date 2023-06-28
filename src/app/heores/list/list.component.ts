import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'she hulk',
    'thor',
    'dr strange',
  ];
  public delatedHero?:string;

  removeLastHero(): void {
   this.delatedHero =  this.heroNames.pop();
  }
}


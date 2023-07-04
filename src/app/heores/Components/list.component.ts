import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'she hulk',
    'thor',
    'dr strange',
    'Batman',
  ];

  public delatedHero?:string;

  removeLastHero(): void {
   this.delatedHero =  this.heroNames.pop();
  }
}



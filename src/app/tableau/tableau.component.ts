import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  
  titre:string="Operation sur les tableau";
  tab:Array<number>=[41,18,23,58];
  tabNb:number=this.tab.length;

  minimum(){
    let min=this.tab[0];
    for(let i of this.tab)
      if(i<min)
      min=i;
    return min;
  }
  moyenne(){
    let moy=0;
    for(let i of this.tab)
      moy=moy+i/this.tabNb;
    return moy.toFixed(2);
  }
 
  
  constructor() { }


  ngOnInit() {
  }

}

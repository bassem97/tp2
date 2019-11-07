import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }
  num1:number;
  num2:number;
  carre:number;
  somme:number;

  onKeyUp(event:KeyboardEvent){
    this.num1=parseInt((<HTMLInputElement>event.target).value);
    let carre=this.num1*this.num1;
    this.carre=carre;
   
  }

  onSomme(i1:string,i2:string){
    this.somme=parseInt(i1)+parseInt(i2);
  }
  

  ngOnInit() {
  }

}

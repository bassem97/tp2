import { Component, OnInit } from '@angular/core';
import { ɵNgStyleR2Impl } from '@angular/common';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { }
  num1:number;
  num2:number;
  produit:number;

  calculer(){
    this.produit=this.num1*this.num2;
  }

  ngOnInit() {
  }

}

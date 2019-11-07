import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor() { }

  nom:string="Popey";
  image="assets/popey.jpg";
  age:number=17;

  ngOnInit() {
  }

}

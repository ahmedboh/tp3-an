import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {
  mois=[1,2,3,4,5,6,7,8,9,10,11,12];
  nombre:number=1;
  a:String="Hiver";
  b:String="Printemp";
  c:string="Eté";
  d:string="Automme";
  constructor() { }

  ngOnInit() {
  }

}

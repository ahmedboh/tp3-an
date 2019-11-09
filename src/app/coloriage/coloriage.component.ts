import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {
  police=["Arial" ,"Calibri" , "Times New Roman"];
  pal:string="Arial";
  col:string="red";
  theme:string="ete";
  color="";
  family="";

  changer()
  {
    this.color=this.col;
    this.family=this.pal;
  }
  constructor() { }

  ngOnInit() {
  }

}

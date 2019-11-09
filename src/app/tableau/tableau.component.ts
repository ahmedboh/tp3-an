import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tab=[15,24,63,98];
  onPostion(x:Number){
    console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}

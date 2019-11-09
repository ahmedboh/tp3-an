import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {
  etudiant={nom:'Ali', moyenne:14.85};
  tab=["DSI","RSI","SEM"];
  val:string="SEM";

  constructor() { }

  ngOnInit() {
  }

}

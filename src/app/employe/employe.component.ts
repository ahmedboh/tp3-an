import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employe={nom:"morad",prenom:"Ali",date:new Date(1998,4,12),salaire:687.56};

  constructor() { }

  ngOnInit() {
  }

}

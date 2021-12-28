import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  acno:any=""
  pwd:any=""
  amount:any=""

  constructor( private Router2:Router) { }

  ngOnInit(): void {
  }


  deposit(){
   this.Router2.navigateByUrl("deposit")
  }

  withdraw(){
    this.Router2.navigateByUrl("withdraw")
   }
}

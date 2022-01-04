import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // acno:any=""
  pwd: any = ""
  amount: any = ""


  user = this.db.currentUserName;
  acno = this.db.currentAccountNo;


  constructor(private Router2: Router, private db: DatabaseService) { }

  ngOnInit(): void {
  }


  deposit() {
    this.Router2.navigateByUrl("deposit")
  }

  withdraw() {
    this.Router2.navigateByUrl("withdraw")
  }


  transaction() {
    this.Router2.navigateByUrl("transaction")
  }

  balance() {
    var acno1 = this.acno;
    let result = this.db.balance(acno1)

    if (result) {
      alert(`${this.user} your account balance is ${result}`)

    }




  }




}

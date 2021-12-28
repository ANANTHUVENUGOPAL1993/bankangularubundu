import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  acno:any=""
  pwd:any=""
  amount:any=""

  constructor(private ds:DatabaseService) { }

  ngOnInit(): void {
  }
deposit(){
  var acno=this.acno;
  var pwd=this.pwd;
  var amount=this.amount;
  let result=this.ds.deposit(acno,pwd,amount)

  if(result){
    alert(`${amount} is credited and the new balace is ${result}`)
  }

}
}

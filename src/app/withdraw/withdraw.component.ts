import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  acno:any=""
  pwd:any=""
  amount:any=""

  constructor(private ds:DatabaseService) { }

  ngOnInit(): void {
  }


  withdraw(){
    var acno=this.acno;
  var pwd=this.pwd;
  var amount=this.amount;
  let result=this.ds.withdraw(acno,pwd,amount)

  if(result){
    alert(`${amount} is withdrawn  and the new balace is ${result}`)
  }
    
  }
}

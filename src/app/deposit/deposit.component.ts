import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  // acno:any=""
  // pwd:any=""
  // amount:any=""
  depositForm = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required,Validators.pattern('[0-9]*')]]



  })


  constructor(private ds:DatabaseService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
deposit(){

  if(this.depositForm.valid){
    var acno=this.depositForm.value.acno;
    var pwd=this.depositForm.value.pwd;
    var amount=this.depositForm.value.amount;
    let result=this.ds.deposit(acno,pwd,amount)

if(result){
  alert(`${amount} is credited and the new balace is ${result}`)
}


  }
 
}
}

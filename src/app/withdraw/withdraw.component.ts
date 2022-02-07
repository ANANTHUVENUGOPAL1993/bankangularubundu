import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  // acno:any=""
  // pwd:any=""
  // amount:any=""
  withdrawForm = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required,Validators.pattern('[0-9]*')]]



  })


  constructor(private ds:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  // withdraw(){

  //   if(this.withdrawForm.valid){
  //     var acno=this.withdrawForm.value.acno;
  //     var pwd=this.withdrawForm.value.pwd;
  //     var amount=this.withdrawForm.value.amount;
  //     let result=this.ds.withdraw(acno,pwd,amount)
    
  //     if(result){
  //       alert(`${amount} is withdrawn  and the new balace is ${result}`)
  //     }

  //   }
   
    
  // }

  withdraw(){

    if(this.withdrawForm.valid){
      var acno=this.withdrawForm.value.acno;
      var pwd=this.withdrawForm.value.pwd;
      var amount=this.withdrawForm.value.amount;
      this.ds.withdraw(acno,pwd,amount).subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
 
      },
      (result)=>{
        alert(result.error.message)
      })
 
    }
   
    
  }





}

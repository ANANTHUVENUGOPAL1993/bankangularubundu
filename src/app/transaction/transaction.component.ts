import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit { 
  transactions:any;
  acno:""

  constructor(private Router3: Router, private ds:DatabaseService) { 
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||"")
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.transactions= result.transaction
      }
    },
    (result)=>{
      alert(result.error.message)
    })

    // this.transactions=this.ds.getTransaction()
    // console.log(this.transactions);
    
   
  }

  ngOnInit(): void {
  }


  home(){
    this.Router3.navigateByUrl("dashboard")
  }




}

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


   acno:any
  pwd: any 
  amount: any 

  acno1=""
  lDate:any


  // user = this.db.currentUserName;
  // acno = this.db.currentAccountNo;
  user:any
 


  constructor(private Router2: Router, private db: DatabaseService) {

    this.lDate= new Date();
    if(localStorage.getItem("currentUserName")){
      this.user=JSON.parse(localStorage.getItem("currentUserName")||"")
    }

    


   }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      alert("please login")
      this.Router2.navigateByUrl("")
    }
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


  delete(){
    this.acno1=JSON.parse(localStorage.getItem("currentAcno")||"")

  }


  deleteAccount(event:any){
    this.db.delete(event).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.Router2.navigateByUrl("")
      }
    })
  }

  cancel(){
    this.acno1=""
  }





  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUserName")

    localStorage.removeItem("token")
    this.Router2.navigateByUrl("")

  }







}

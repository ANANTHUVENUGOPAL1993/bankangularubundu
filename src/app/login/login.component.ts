import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="you are a perfect banking partner"

  accno="Account No "
  acno=""
  pwd=""

  

  constructor(private router1:Router, private ds:DatabaseService) { }  //////to communucate between component

  ngOnInit(): void {
  }
//////////////////////////////////////////////////

  // login(){
   

  //   var acno=this.acno;
  //   var password=this.pwd;
  //   let database=this.users
    
  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("invalid account no")
  //   }
  // }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }

  // pwdChange(event:any){
  //   this.pwd=event.target.value
  //   console.log(this.pwd)
  // }
///////////////////////////////////////////////////////////
  // login(a:any,b:any){

  //   console.log(a);
    
   

  //   var acno=a.value;
  //   var password=b.value;
  //   let database=this.users
    
  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("invalid account no")
  //   }
  // }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno)
  // }

  // pwdChange(event:any){
  //   this.pwd=event.target.value
  //   // console.log(this.pwd)
  // }
/////////////////////////////////////////////////////two way binding
login(){
   

    var acno=this.acno;
    var password=this.pwd;
    let result=this.ds.login(acno,password)
    if(result){
      alert("Login Successful.......")
      this.router1.navigateByUrl('dashboard')
    }
    
   
  }



}

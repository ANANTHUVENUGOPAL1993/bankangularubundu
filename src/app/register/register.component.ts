import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  accnoR="Username"
  accno="Account no"
  acno=""
  pwd=""
  uname=""



  constructor( private ds:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname;
    var acno=this.acno;
    var pwd=this.pwd;
    let result=this.ds.register(acno,pwd,uname)

    if(result){
      alert("Account Registered Successfully......")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exit !!!!!!!")
    }
  }

  

}

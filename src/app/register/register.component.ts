import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  accnoR = "Username"
  accno = "Account no"
  ////////[ngModel]/////////
  // acno=""
  // pwd=""
  // uname=""


  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]


  })





  constructor(private ds: DatabaseService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    // var uname=this.uname;
    // var acno=this.acno;
    // var pwd=this.pwd;
    console.log(this.registerForm);
    if (this.registerForm.valid) {


      var uname = this.registerForm.value.uname;
      var acno = this.registerForm.value.acno;
      var pwd = this.registerForm.value.pwd;
      let result = this.ds.register(acno, pwd, uname)

      if (result) {
        alert("Account Registered Successfully......")
        this.router.navigateByUrl("")
      }
      else {
        alert("Account already exit !!!!!!!")
      }

    }
    else{
      alert("Invalid Form")
    }



  }



}

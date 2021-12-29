import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  users: any = {
    1000: {
      acno: 1000,
      uname: "n1",
      password: 1000,
      balance: 5000
    },
    1001: {
      acno: 1001,
      uname: "n2",
      password: 1001,
      balance: 5000
    },

    1002: {
      acno: 1002,
      uname: "n3",
      password: 1002,
      balance: 5000
    }


  }

  constructor() { }

  register(acno: any, password: any, uname: any) {
    let db = this.users
    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      return true
    }
  }

  login(acno1: any, password1: any) {
    let database = this.users
    if (acno1 in database) {
      if (password1 == database[acno1]["password"]) {
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid Account Number")
      return false
    }
  }

  deposit(acno: any, password: any, amt: any) {
    var amount = parseInt(amt)
    let db = this.users;

    if (acno in db) {
      if (password == db[acno]["password"]) {
        db[acno]["balance"] = db[acno]["balance"] + amount
        return db[acno]["balance"]
      }
      else {
        alert("Incorrect Password")
        return false
      }

    }
    else {
      alert("Account does not exit!!!!!!")
      return false
    }
  }

  withdraw(acno: any, password: any, amt: any) {
    var amount = parseInt(amt);
    let db = this.users;
    if (acno in db) {
      if (password == db[acno]["password"]) {
        var bal = db[acno]["balance"]
        if (bal >=amount) {
          db[acno]["balance"] = db[acno]["balance"] - amount
          return db[acno]["balance"];


        }
        else {
          alert("Insufficient Balance")
          return false
        }

      }
      else {
        alert("Invalid Password")
      }

    }
    else {
      alert("Account No doesnot Exit!!!!!!")
    }

  }




}

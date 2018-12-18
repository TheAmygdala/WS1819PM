import { Component, OnInit } from '@angular/core';
import { Memory } from "./../memory.service";
import { User } from "./../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public memory: Memory) { }
  users: User[];
  username: string;
  pw: string;

  ngOnInit() {
    this.users = this.memory.user;
    this.username = "";
    this.pw = "";
  }
  register() {
    let ts: boolean;
    ts = false;
    this.users.forEach(aUser => {
      if (aUser.userName === this.username) {
        console.error("Den User gibt es bereits");
        ts = true;
      }
    });
    if (ts === false) {
      this.users.push(new User(this.username, this.pw));
      console.log(this.users);
      this.login();
    }

  }
  login() {
    console.log("Erfolg Login");
    //this.users.login(username, userpw);
  }
  logout() {
    console.log("Erfolg Logout!");
    //this.users.logout();
  }




}

import { Component, OnInit } from '@angular/core';
import { Memory} from "./../memory.service";
import {IUser} from "./../iuser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public memory: Memory) { }
  users:IUser[];
  username: string;
  pw: string;

  ngOnInit() {
    this.users = this.memory.user;
    this.username="";
    this.pw="";
  }
  register()
  {
    console.log("Erfolg Regisister");
    //this.users.push({userName: this.username, userPW: this.pw});
  }
  login()
  {
    console.log("Erfolg");
  }



}

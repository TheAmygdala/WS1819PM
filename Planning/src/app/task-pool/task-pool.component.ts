import { Component, OnInit } from '@angular/core';
import {User} from './../user.service';
import { Memory} from "./../memory.service";

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.css']
})
export class TaskPoolComponent implements OnInit {

  constructor(public memory: Memory) { }

  users: User[];
  ngOnInit() {
    this.users = this.memory.user;
  }
  
}

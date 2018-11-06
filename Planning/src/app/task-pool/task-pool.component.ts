import { Component, OnInit } from '@angular/core';
import { IUser } from "./../iuser";
import { Memory} from "./../memory.service";

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.css']
})
export class TaskPoolComponent implements OnInit {

  constructor(public memory: Memory) { }

  users: IUser[];
  ngOnInit() {
    this.users = this.memory.user;
  }
  /**
   * Testdaten für User. Müssen nach Erstellung der DB über die DAO geändert werden
   */
  
}

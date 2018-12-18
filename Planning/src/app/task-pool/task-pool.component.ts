import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { IUser } from './../iuser';
=======
import {User} from './../user.service';
import { Memory} from "./../memory.service";
>>>>>>> a939c491544b33f2e87fb0d4127dca8bca3962df

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
<<<<<<< HEAD
  /**
   * Testdaten für User. Müssen nach Erstellung der DB über die DAO geändert werden
   */
  user: IUser[] = [
    { userName: 'Gabriel', userPW: 'PW123' },
    { userName: 'Abra', userPW: 'PWKadabra' },
    { userName: 'Horst Seehofer', userPW: 'PWKruzifixnochmoa' }
  ];
=======
  
>>>>>>> a939c491544b33f2e87fb0d4127dca8bca3962df
}

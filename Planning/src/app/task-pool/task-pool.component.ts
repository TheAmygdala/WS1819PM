import { Component, OnInit } from '@angular/core';
import { IUser } from "./../iuser";

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.css']
})
export class TaskPoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /**
   * Testdaten für User. Müssen nach Erstellung der DB über die DAO geändert werden
   */
  user: IUser[] = [
    { userName: "Gabriel", userPW: "PW123" },
    { userName: "Abra", userPW: "PWKadabra" },
    { userName: "Horst Seehofer", userPW: "PWKruzifixnochmoa" }
  ];
}

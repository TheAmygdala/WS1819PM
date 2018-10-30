import { Component, OnInit } from '@angular/core';
import { Task } from './../task.service';
import {DAO } from './../dao.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  task: Task[] = [];
  dao: DAO;

  constructor() {

  }

  ngOnInit() {
    /**
     * Testdaten
     */

     let taskA = new Task('Gabriel', 'Aufgabentitel',
      'Text und Beschreibung für eine Aufgabe', 
      new Date(), ''
      );
      let taskB = new Task('Horst Seehofer', 'Aufgabentitel 2',
      'Text und Beschreibung für eine Aufgabe 2', 
      new Date(), ''
      );
      let taskC = new Task('Abra', 'Aufgabentitel 3',
      'Text und Beschreibung für eine Aufgabe 3', 
      new Date(), ''
      );
      this.task.push(taskA);
      this.task.push(taskB);
      this.task.push(taskC);
  }
}

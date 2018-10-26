import { Component, OnInit } from '@angular/core';
import { ITask } from './../itask';
import {DAO } from './../dao.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  task: ITask[] = [];
  dao: DAO;
  
  constructor() { 
    
  }

  ngOnInit() {
    /**
     * Testdaten
     */
    this.task.push({
      taskID: "B100", owner: "Gabriel", title: "Dokumentation", subtitle: "",
      description: "Programmiere ABC und erstelle daraufhin eine Komponente XYZ über das Tool 123", 
      done: false, date: new Date()
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ITask } from './../itask';
import { DAO } from "./../dao.service";

@Component({
  selector: 'app-common-tasks',
  templateUrl: './common-tasks.component.html',
  styleUrls: ['./common-tasks.component.css']
})
export class CommonTasksComponent implements OnInit {

  task: ITask[] = [];
  
  dao: DAO;

  /*
    fillTasks()
    {
      task füllen.
      Hole Tasks über die DAO aus der Datenbank
    }
    */
  constructor() { }

  ngOnInit() {
    /**
     * Testdaten
     */
    this.task.push({
      taskID: "B100", owner: "Gabriel", title: "Dokumentation", subtitle: "",
      description: "Erstelle eine Dokumentation", done: false, date: new Date()
    });
  }

}

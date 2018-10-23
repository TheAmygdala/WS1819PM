import { Component, OnInit } from '@angular/core';
import { ITask} from './../itask';

@Component({
  selector: 'app-common-tasks',
  templateUrl: './common-tasks.component.html',
  styleUrls: ['./common-tasks.component.css']
})
export class CommonTasksComponent implements OnInit {

  task: ITask;

  constructor() { }

  ngOnInit() {
    this.task = {taskID: "B100", owner: "Gabriel", title: "Dokumentation", subtitle: "", 
    description: "Erstelle eine Dokumentation", done: false, date: new Date()};
  }

}

import { Component, OnInit } from '@angular/core';
import { Task } from './../task.service';
import { Memory } from './../memory.service';

@Component({
  selector: 'app-common-tasks',
  templateUrl: './common-tasks.component.html',
  styleUrls: ['./common-tasks.component.css']
})
export class CommonTasksComponent implements OnInit {
  task:Task[];
  constructor(public memory:Memory) {}

  ngOnInit() {
    this.task = this.memory.task;
  }
  addTask()
  {
    
  }
}

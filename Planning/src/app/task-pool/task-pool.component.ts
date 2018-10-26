import { Component, OnInit } from '@angular/core';

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
   * Aufgabenerstellung. Setzt DB voraus. Evtl. über Array zwischenspeichern
   */
  addTask()
  {

  }
}

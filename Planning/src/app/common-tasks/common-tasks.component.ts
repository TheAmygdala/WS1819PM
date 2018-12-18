import { Component, OnInit } from '@angular/core';
import { Task } from './../task.service';
<<<<<<< HEAD
import { DAO } from './../dao.service';
=======
import { Memory } from './../memory.service';
>>>>>>> a939c491544b33f2e87fb0d4127dca8bca3962df

@Component({
  selector: 'app-common-tasks',
  templateUrl: './common-tasks.component.html',
  styleUrls: ['./common-tasks.component.css']
})
export class CommonTasksComponent implements OnInit {
<<<<<<< HEAD

  task: Task[] = [];
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
      let taskA = new Task('Gabriel', 'Dokumentation erstellen',
      'Erstellen einer Dokumentation, über Programmschnittstellen, die zur Hauptkomponente führen',
      new Date(), ''
      );
      let taskB = new Task('Horst Seehofer', 'Programmieren',
      'Drei Komponenten erstellen, die einen Service als Speicher bereitstellen',
      new Date(), ''
      );
      let taskC = new Task('Abra', 'Konzeption',
      'Klassendiagramm erstellen, mit Kanten und Beziehungen + Kardinalitäten',
      new Date(), ''
      );
      this.task.push(taskA);
      this.task.push(taskB);
      this.task.push(taskC);
=======
  task:Task[];
  constructor(public memory:Memory) {}

  ngOnInit() {
    this.task = this.memory.task;
  }
  addTask()
  {
    
>>>>>>> a939c491544b33f2e87fb0d4127dca8bca3962df
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from './../task.service';
import { DAO } from "./../dao.service";

@Component({
  selector: 'app-common-tasks',
  templateUrl: './common-tasks.component.html',
  styleUrls: ['./common-tasks.component.css']
})
export class CommonTasksComponent implements OnInit {

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
    
      let taskA = new Task("Gabriel", "Dokumentation erstellen",
      "Erstellen einer Dokumentation, über Programmschnittstellen, die zur Hauptkomponente führen", 
      new Date(),"" 
      );
      this.task.push(taskA);

  }

}

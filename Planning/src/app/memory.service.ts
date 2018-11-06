import { Injectable, OnInit } from '@angular/core';
import {Task} from './task.service';
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class Memory{
  user: IUser[];

  task: Task[] = [];

  constructor() {
    /**
     * Testdaten
     */
    let taskA = new Task("Gabriel", "Dokumentation erstellen",
    "Erstellen einer Dokumentation, über Programmschnittstellen, die zur Hauptkomponente führen", 
    new Date(),"" 
    );
    let taskB = new Task("Horst Seehofer", "Programmieren",
    "Drei Komponenten erstellen, die einen Service als Speicher bereitstellen", 
    new Date(),"" 
    );
    let taskC = new Task("Abra", "Konzeption",
    "Klassendiagramm erstellen, mit Kanten und Beziehungen + Kardinalitäten", 
    new Date(),"" 
    );
    this.task.push(taskA);
    this.task.push(taskB);
    this.task.push(taskC);

    this.user = [
      { userName: "Gabriel", userPW: "PW123" },
      { userName: "Abra", userPW: "PWKadabra" },
      { userName: "Horst Seehofer", userPW: "PWKruzifixnochmoa" }
    ];
   }
}

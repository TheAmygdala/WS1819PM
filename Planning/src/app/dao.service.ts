import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {Task} from './task.service';

@Injectable({
  providedIn: 'root'
})
export class DAO {

  constructor() { }

  /**
   * 
   * @param title Aufgabentitel
   * @param description Aufgabenbeschreibung
   * @param date Ablaufdatum
   * @param subtitle Untertitel
   * 
   * Ausstehende Aufgaben: Einloggen und Owner erstellen + Verlinken für Owner
   */
  addTask(title: string, description: string, date: Date, subtitle?:string)
  {
    let taskID = uuid();
    let newTask = new Task( 'TESTOWNER', title, description, date, subtitle);
    //ADD TO DB
  }

  removeTask(taskID: string) {
    //REMOVE FROM DB
  }

  getTasksByOwner(): Task[] {
    return //TASKS
  }

  getTasksByTitle() {

  }

  setTaskTitle() {

  }
  setTaskDescription() {

  }
  setTaskOwner()
  {

  }
  setTaskDone() {

  }
  setTaskDate() {

  }
}

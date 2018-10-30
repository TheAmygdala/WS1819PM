import { Injectable } from '@angular/core';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class Task implements ITask {
    owner: string;
    taskID: string;
    title: string;
    subtitle: string;
    description: string;
    date: Date;
    done: boolean;

    constructor(owner: string, title: string, description: string, date: Date, subtitle?: string) {
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.date = date;
        this.done = false;
        subtitle ? this.subtitle = subtitle : subtitle = '';
    }

}

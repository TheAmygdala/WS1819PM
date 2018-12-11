import { Injectable } from '@angular/core';
import { IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class User implements IUser{
  userCount: number;
  userName:string;
  userPW:string;
  static statZahl = 0;

  constructor(userName: string, userPW:string)
  {
    this.userName=userName;
    this.userPW=userPW;
    this.userCount = User.statZahl;
    User.statZahl++;

  }
}


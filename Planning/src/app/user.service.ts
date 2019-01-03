import { Injectable } from '@angular/core';
import { IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class User implements IUser {

  static statZahl = 0;
  isAuthenticated: boolean;
  userCount: number;
  userName: string;
  userPW: string;

  constructor(userName: string, userPW: string) {

    this.userName = userName;
    this.userPW = userPW;
    this.userCount = User.statZahl;
    User.statZahl++;

  }
}


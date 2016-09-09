import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from './user';

@Injectable()
export class AuthService {
  private _user: User = null;

  login(user: User): Observable<boolean> {
    return Observable.of(this.fakeLogin(user)).delay(1000);
  }

  private fakeLogin(user: User): boolean {
    let result = user && user.password === "root";
    if( result){
      this._user = user;
    }
    return result;
  }

  logout() {
    this._user = null;
  }

  get isLoggedIn(): boolean{
    return !!this._user;
  }

  get user(){
    return this._user;
  }
}
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from './user';
import { MOCK_USERS } from './users.mock';

@Injectable()
export class AuthService {
  private _user: User = null;

  login(user: User): Observable<boolean> {
    return Observable.of(this.fakeLogin(user)).delay(1000);
  }

  private fakeLogin(user: User): boolean {
    let result = MOCK_USERS.find((x: User) => {
      return x.email === user.email && x.password === user.password;
    });

    if (!!result) {
      this._user = user;
    }
    return !!result;
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


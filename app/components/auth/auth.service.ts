import { Injectable } from '@angular/core';

import { User } from './user';
import { UserProviderService } from './user-provider.service';

@Injectable()
export class AuthService {
  private _user: User = null;

  constructor(private userProvider: UserProviderService) {

  }

  auth(user: User): boolean {
    return this.fakeLogin(user);
  }

  private fakeLogin(user: User): boolean {
    const fetchedUser = this.userProvider.retrieveByCredentials(user);
    if (!!fetchedUser) {
      this._user = fetchedUser;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._user = null;
  }

  get isLoggedIn(): boolean {
    return !!this._user;
  }

  get user() {
    return this._user;
  }
}


import { Injectable } from '@angular/core';
import { MOCK_USERS } from './users.mock';
import { User } from './user';

@Injectable()
export class UserProviderService {

  constructor() { }

  retrieveByCredentials(credentials: User) {
    return MOCK_USERS.find(
      (x: User) => x.equals(credentials)
    );
  }

  save(user: User) {
    MOCK_USERS.push(user);
  }

}

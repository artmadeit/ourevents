import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../users.mock';
import { User } from '../user';

@Injectable()
export class RegisterUserService {

    public execute(user: User) {
        MOCK_USERS.push(user);
    }
}
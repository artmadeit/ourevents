import { Injectable } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { UserProviderService } from '../user-provider.service';

@Injectable()
export class RegisterUserService {

    constructor(
        private authService: AuthService,
        private userProvider: UserProviderService) {
    }

    execute(user: User): void {
        this.userProvider.save(user);
        this.authService.auth(user);
    }
}

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
        if (!this.userProvider.existUser(user)) {
            this.userProvider.save(user);
            // TODO: change the use case steps
            this.authService.auth(user);
        }
    }
}

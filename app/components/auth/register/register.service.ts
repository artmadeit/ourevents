import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { UserProviderService } from '../user-provider.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterUserService {

    constructor(
        private authService: AuthService,
        private userProvider: UserProviderService) {
    }

    execute(user: User): void {
        this.userProvider.save(user);
        this.authService.login(user);
    }
}

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string) {

    }

    equals(user: User) {
        return this.email === user.email && this.password === user.password;
    }
}

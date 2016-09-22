import { Party } from './party';

export class Person extends Party {
  constructor(
    public firstName: string,
    public lastName: string) {
      super();
    }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

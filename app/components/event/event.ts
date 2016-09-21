export interface Event {
  id?: number;
  name: string;
  description?: string;
  location: Location;
  speaker: Person;
  period: TimePeriod;
}

export interface Location {
  name: string;
  latitude?: number;
  longitude?: number;
}

export class TimePeriod {
  private _start: Date;
  private _end: Date;

  constructor(start: Date, end: Date) {
    this._start = start;
    this._end = end;
  }

  get start(): Date {
    return this._start;
  }

  get end(): Date {
    return this._end;
  }
}

export class Person {

  constructor(
    public firstName: string,
    public lastName: string) { }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

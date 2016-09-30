import { Party, Person, Organization } from '../party/index';
import { EventRoleTypes, EventRole } from './index';

export class Event extends Party {
  private _name: string;
  acronym?: string;
  description?: string;

  constructor(
    name: string,
    public location: Location,
    public period: TimePeriod,
    public isPublic = true) {
    super();
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get speakers(): Person[] {
    return this.parents(EventRoleTypes.Speaker) as Person[];
  }

  get sponsorsByType(): Map<string, Organization[]> {
    return Array.from(this.parentAccountabilities)
      .filter((childAccountability) => childAccountability.type.name === EventRoleTypes.Sponsor.name)
      .reduce((result, sponsorAccountability) => {
        const sponsorType = (<EventRole>sponsorAccountability).synonym;
        if (result.has(sponsorType)) {
          let sponsors = result.get(sponsorType);
          sponsors.push(sponsorAccountability.child as Organization);
          result.set(sponsorType, sponsors);
        } else {
          result.set(sponsorType, [sponsorAccountability.child as Organization]);
        }
        return result;
      }, new Map<string, Organization[]>());
  }
}

interface Point {
  latitude: number;
  longitude: number;
}

export class Location {
  private _point: Point;
  constructor(public name: string, point?: Point) {
    this._point = point;
  }

  set point(point: Point) {
    this._point = point;
  }

  get latitude() {
    return this._point.latitude;
  }

  get longitude() {
    return this._point.longitude;
  }
}

export class TimePeriod {
  readonly start: Date;
  readonly end: Date;

  constructor(start: Date, end: Date) {
    if (start > end) {
      throw new Error(`The start date can't be more than end date`);
    }
    this.start = start;
    this.end = end;
  }
}

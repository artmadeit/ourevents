import { Event, TimePeriod, Location, EventRole, EventRoleTypes } from './index';
import { kentBeck, martinFowler } from '../party/person/mock';

let startupsMillionare = new Event(
    `Why startups can't be millionare?`,
    new Location('San Francisco'),
    new TimePeriod(new Date(2016, 08, 11), new Date(2016, 08, 12))
);

startupsMillionare.id = 1;
startupsMillionare.shortDescription = `Startups can't be millionare, that's the question`;
EventRole.create(kentBeck, startupsMillionare, EventRoleTypes.Speaker);

let nosqlDatabase = new Event(
    'Introduction to NOSQL databases',
    new Location('Washington'),
    new TimePeriod(new Date(2016, 09, 12), new Date(2016, 09, 13))
);

nosqlDatabase.shortDescription = 'Martin Fowler explains when, why and how NOSQL databases are useful';
nosqlDatabase.description = 'some description';
EventRole.create(martinFowler, nosqlDatabase, EventRoleTypes.Speaker);

export const EVENTS: Event[] = [
    startupsMillionare,
    nosqlDatabase
];

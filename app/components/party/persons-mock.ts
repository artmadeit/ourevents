import { Person } from './person';

export let kentBeck: Person = new Person('Kent', 'Beck');
kentBeck.id = 1;

export let martinFowler: Person = new Person('Martin', 'Fowler');
martinFowler.id = 2;

export const PERSONS: Person[] = [
    kentBeck,
    martinFowler,
];

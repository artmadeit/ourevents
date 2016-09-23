import { Person } from './person';

export let kentBeck: Person = new Person('Kent', 'Beck');
kentBeck.id = 1;

export let martinFowler: Person = new Person('Martin', 'Fowler');
martinFowler.id = 2;

export let robertMartin: Person = new Person('Robert', 'C. Martin');
robertMartin.id = 3;


export const PERSONS: Person[] = [
    kentBeck,
    martinFowler,
    robertMartin
];

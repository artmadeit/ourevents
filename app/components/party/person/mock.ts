import { Person } from './person';

export let kentBeck: Person = new Person('Kent', 'Beck');
kentBeck.id = 1;
kentBeck.shortDescription = 'Technical couch at Facebook';

export let martinFowler: Person = new Person('Martin', 'Fowler');
martinFowler.id = 2;
martinFowler.shortDescription = 'Object-oriented programming expert and consultant, one of the leaders in refactoring';

export let robertMartin: Person = new Person('Robert', 'C. Martin');
robertMartin.id = 3;

export const PERSONS: Person[] = [
    kentBeck,
    martinFowler,
    robertMartin
];

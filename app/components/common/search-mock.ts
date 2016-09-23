import { Nameable } from './nameable';

/*Gets the first 5 coincidences of the name */
export function searchByName(array: Array<Nameable>, term): Array<Nameable> {
    return array.filter((x: Nameable) => x.name.toUpperCase().includes(term.toUpperCase()))
                .slice(0, 5);
};

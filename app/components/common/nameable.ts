export interface Nameable {
    name: string;
}

export class NamedObject implements Nameable {
    constructor(public name: string) { }
}

import { Party } from '../party';

/**
 * An organization can be an institution, project or company
 */
export class Organization extends Party {
    private _name: string;

    constructor(name: string, public acronym?: string) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

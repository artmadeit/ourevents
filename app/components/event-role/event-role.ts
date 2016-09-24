import { Nameable } from '../common/nameable';

export class EventRole extends Nameable {
    _name: string;
    description?: string;

    constructor(name: string, public synonym?: string) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

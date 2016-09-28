import { Nameable } from '../../common/nameable';

export class EventRole implements Nameable {
    _name: string;
    description?: string;

    constructor(name: string, public synonym?: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

import { Party } from '../party/party';
import { NamedObject } from '../common/nameable';

export class Accountability {
    readonly parent: Party;
    readonly child: Party;
    readonly type: AccountabilityType;

    constructor(from: Party, to: Party, type: AccountabilityType) {
        if (from === to) {
            throw new Error(`Can't be an Accountability from the same party`);
        }
        this.parent = from;
        this.child = to;
        this.type = type;
    }
}

export class AccountabilityType extends NamedObject {
}

import { Party } from '../party/party';
import { NamedObject } from '../common/nameable';

export class Accountability {
    readonly parent: Party;
    readonly child: Party;
    readonly type: AccountabilityType;

    static create(parent: Party, child: Party, type: AccountabilityType): Accountability {
        if (!Accountability.canCreate(parent, child, type)) {
            throw new Error('Invalid Accountability');
        }
        return new Accountability(parent, child, type);
    }

    static canCreate(parent: Party, child: Party, type: AccountabilityType): boolean {
        if (parent === child) { return false; }
        if (parent.ancestorsInclude(child, type)) { return false; }
        return true;
    }

    protected constructor(parent: Party, child: Party, type: AccountabilityType) {
        this.parent = parent;
        parent.friendAddChildAccountability(this);
        this.child = child;
        child.friendAddParentAccountability(this);
        this.type = type;
    }
}

export class AccountabilityType extends NamedObject {
}

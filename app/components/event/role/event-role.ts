import { Accountability, AccountabilityType } from '../../accountability/accountability';
import { Party } from '../../party/party';

export class EventRole extends Accountability {
    static create(parent: Party, child: Party, type: AccountabilityType, synonym?: string): Accountability {
        if (!Accountability.canCreate(parent, child, type)) {
            throw new Error('Invalid Accountability');
        }
        return new EventRole(parent, child, type, synonym);
    }

    protected constructor(parent: Party, child: Party, type: AccountabilityType, public synonym?: string) {
        super(parent, child, type);
    }
}

export class EventRoleType extends AccountabilityType {
}

export class EventRoleTypes {
    static Sponsor = new EventRoleType('Sponsor');
    static Author = new EventRoleType('Autor');
    static Speaker = new EventRoleType('Expositor');
    static Attendance = new EventRoleType('Atendiente');
    static Reviewer = new EventRoleType('Revisor');
    static ProgramChair = new EventRoleType('Jefe de programa');
    static Organizer = new EventRoleType('Organizador');
}

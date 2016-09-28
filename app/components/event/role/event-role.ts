import { AccountabilityType } from '../../accountability/accountability';

export class EventRole extends AccountabilityType {
}

export class EventRoles {
    static Sponsor = new EventRole('Sponsor');
    static Author = new EventRole('Autor')
    static Attendance = new EventRole('Atendiente');
    static Reviewer = new EventRole('Revisor');
    static ProgramChair = new EventRole('Jefe de programa');
    static Organizer = new EventRole('Organizador');
}

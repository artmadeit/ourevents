import { EventRole} from './event-role';

export const EVENTS: EventRole[] = [
    new EventRole('autores'),
    new EventRole('atendientes'),
    new EventRole('revisor', 'miembro del comite del programa'),
    new EventRole('jefe de programa'),
    new EventRole('organizador', 'miembro del comite organizador'),
];

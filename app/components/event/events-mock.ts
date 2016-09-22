import { Event, TimePeriod } from './event';
import { kentBeck, martinFowler } from  '../party/persons-mock';

export const EVENTS: Event[] = [
    {
        id: 1,
        name: `Why startups can't be millionare?`,
        location: {
            name: 'San Borja'
        },
        speaker: kentBeck,
        period: new TimePeriod(new Date(2016, 08, 11), new Date()),
        isPublic: true
    },
    {
        id: 2,
        name: 'Introduction to NOSQL databases',
        description: 'From the power of relational to NOSQL databases, Martin Fowler..',
        location: {
            name: 'Ate'
        },
        speaker: martinFowler,
        period: new TimePeriod(new Date(2016, 09, 12), new Date()),
        isPublic: true
    }
];
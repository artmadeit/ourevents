import { Party } from './party';
import { PERSONS } from './person/mock';
import { ORGANIZATIONS } from './organization/mock';

export const PARTIES: Party[] = [
    ...PERSONS,
    ...ORGANIZATIONS
];

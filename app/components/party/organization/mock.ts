import { Organization } from './organization';

const UNMSM  = new Organization('Universidad Nacional Mayor de San Marcos', 'UNMSM');
UNMSM.id = 1;
UNMSM.shortDescription = 'La decana de america';

const MDG = new Organization('Meteor Development Group', 'MDG');
MDG.id = 2;
MDG.shortDescription = 'A group of talented, ambitious people that want to advance the Meteor platform';

const Facebook = new Organization('Facebook');
Facebook.id = 3;
Facebook.shortDescription = 'Social network';

const ACM = new Organization('Association for Computing Machinery', 'ACM');
ACM.id = 4;
ACM.shortDescription = 'International scientific and educational organization';

export const ORGANIZATIONS: Organization[] = [
    UNMSM,
    MDG,
    Facebook,
    ACM
];

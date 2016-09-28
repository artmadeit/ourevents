import { Party } from '../party/party';

export class Accountability {
    readonly from: Party;
    readonly to: Party;

    constructor(from: Party, to: Party) {
        if (from === to) {
            throw new Error(`Can't be an Accountability from the same party`);
        }
        this.from = from;
        this.to = to;
    }
}

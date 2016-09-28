import { Nameable } from '../common/nameable';
import { Searchable } from '../common/search/searchable';
import { Accountability, AccountabilityType } from '../accountability/accountability';

export abstract class Party implements Searchable, Nameable {
  id?: number;
  shortDescription: string;
  abstract get name(): string;
  private parentAccountabilities: Set<Accountability>;
  private childAccountabilities: Set<Accountability>;


  constructor() {
    this.parentAccountabilities = new Set<Accountability>();
    this.childAccountabilities = new Set<Accountability>();
  }

  friendAddChildAccountability(accountability: Accountability): void {
    this.childAccountabilities.add(accountability);
  }

  friendAddParentAccountability(accountability: Accountability): void {
    this.parentAccountabilities.add(accountability);
  }

  parents(accountabilityType?: AccountabilityType): Party[] {
    if (!!accountabilityType) {
      return Array.from(this.parentAccountabilities)
        .filter(x => x.type === accountabilityType)
        .map(x => x.parent);
    } else {
      return Array.from(this.parentAccountabilities).map(x => x.parent);
    }
  }

  children(): Party[] {
    return Array.from(this.childAccountabilities).map(x => x.child);
  }

  ancestorsInclude(sample: Party, type: AccountabilityType): boolean {
    for (let parent of this.parents(type)) {
      if (parent === sample) { return true; }
      if (parent.ancestorsInclude(sample, type)) { return true; }
    }
    return false;
  }
}

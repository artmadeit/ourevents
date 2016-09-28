import { Nameable } from '../common/nameable';
import { Searchable } from '../common/search/searchable';

export abstract class Party implements Searchable, Nameable {
  id?: number;
  shortDescription: string;
  abstract get name(): string;
}

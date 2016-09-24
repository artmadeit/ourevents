import { Nameable } from '../common/nameable';
import { Searchable } from '../common/search/searchable';

export abstract class Party extends Nameable implements Searchable {
  id: number;
  shortDescription: string;
}

import { Nameable } from '../common/nameable';

export abstract class Party extends Nameable {
  id: number;
  shortDescription: string;
}

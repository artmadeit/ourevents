export abstract class Party {
  id: number;
  shortDescription: string;
  abstract get name(): string;
}

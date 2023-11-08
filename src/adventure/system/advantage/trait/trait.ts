export abstract class Trait {
  abstract name: string;

  abstract description: string;

  abstract frequency: string;

  constructor(public readonly keyword: string) {
  }
}
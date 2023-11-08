import { Trait } from './trait/trait';

export enum AdvantageType {
  STATUS = 'STATUS',
  ALLY = 'Sojusznik',
  GADGET = 'Gadżet',
  MAGIC = 'Magia',

}

export abstract class Advantage {
  abstract type: AdvantageType;

  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly trait: Array<Trait>,
  ) {
  }

}
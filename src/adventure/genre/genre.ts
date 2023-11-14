import { Adventure } from '../adventure';
import { Parties } from '../party/parties';

export abstract class Genre {
  constructor(public readonly parties: Parties) {
  }

  abstract getStructure(): Adventure;
}
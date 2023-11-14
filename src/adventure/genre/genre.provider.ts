import { Genre } from './genre';
import { Heist } from './heist/heist';
import { Parties } from '../party/parties';

export class GenreProvider {
  public static provideRandom(parties: Parties): Genre {
    return new Heist(parties);
  }
}
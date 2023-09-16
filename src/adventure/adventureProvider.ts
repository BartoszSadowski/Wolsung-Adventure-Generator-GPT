import { GenreProvider } from './genre/genreProvider';
import { Party } from './party/party';

export class AdventureProvider {
  generate() {
    const parties: Array<Party> = [];

    const genre = GenreProvider.provideRandom(parties);
    const structure = genre.getStructure();
    console.log(parties);

    return structure;
  }
}
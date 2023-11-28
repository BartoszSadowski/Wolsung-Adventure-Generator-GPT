import { GenreProvider } from './genre/genre.provider';
import { TeamParty } from './party/team/team.party';
import { AntagonistParty } from './party/antagonist/antagonist.party';
import { Parties } from './party/parties';

export class AdventureProvider {
  generate() {
    const parties = new Parties([
      new TeamParty(),
      new AntagonistParty(),
    ]);

    const genre = GenreProvider.provideRandom(parties);
    const structure = genre.getStructure();
    console.log('parties:', parties.toJson());

    return structure;
  }
}
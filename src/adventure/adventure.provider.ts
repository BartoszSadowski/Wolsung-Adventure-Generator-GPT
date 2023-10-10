import { GenreProvider } from './genre/genre.provider';
import { Party } from './party/party';
import { TeamParty } from './party/team/team.party';
import { AntagonistParty } from './party/antagonist/antagonist.party';

export class AdventureProvider {
  generate() {
    const parties: Array<Party> = [
      new TeamParty(),
      new AntagonistParty(),
    ];

    const genre = GenreProvider.provideRandom(parties);
    const structure = genre.getStructure();
    console.log('parties:', JSON.stringify(parties, null, '  '));

    return structure.toJson();
  }
}
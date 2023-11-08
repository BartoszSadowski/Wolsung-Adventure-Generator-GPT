import { AllyAdvantage, AllyDescription } from './ally.advantage';
import { Party } from '../../../party/party';
import { AdvantageTrait } from '../trait/advantage.trait';
import { getRandomRace } from '../../../world/race';
import { Country } from '../../../world/country';
import { Gender, getRandomGender } from './gender';
import { PartyType } from '../../../party/partyType';
import { PlaceOfActionParty } from '../../../party/placeOfAction/placeOfAction.party';
import { getRandomName, getRandomSurname } from '../../../world/name';

export class AllyProvider {
  get(parties: Array<Party>) {
    const country = this.getCountryFromParties(parties);
    const allyDescription = this.getDescription(country);

    const name = this.getName(allyDescription.gender, allyDescription.nationality);
    const description = 'description';
    const traits = [new AdvantageTrait('gdy wykradasz')];

    return new AllyAdvantage(
      name,
      description,
      traits,
      allyDescription,
    );
  }


  private getDescription(country: Country) {
    const race = getRandomRace();
    const nationality = country;
    const gender = getRandomGender();
    const looks: string[] = [];
    const traits: string[] = [];

    return new AllyDescription(
      race,
      nationality,
      gender,
      looks,
      traits,
    );
  }

  private getCountryFromParties(parties: Array<Party>): Country {
    const placeOfAction = parties.find(party => party.partyType === PartyType.PLACE_OF_ACTION) as PlaceOfActionParty;
    return placeOfAction.country;
  }

  private getName(gender: Gender, country: Country) {
    return `${getRandomName(gender, country)} ${getRandomSurname(country)}`;
  }
}
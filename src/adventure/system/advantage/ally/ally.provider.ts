import { AllyAdvantage, AllyDescription } from './ally.advantage';
import { Party } from '../../../party/party';
import { getRandomRace } from '../../../world/race';
import { Country } from '../../../world/country';
import { Gender, getRandomGender } from './gender';
import { PartyType } from '../../../party/partyType';
import { PlaceOfActionParty } from '../../../party/placeOfAction/placeOfAction.party';
import { getRandomName, getRandomSurname } from '../../../world/name';
import { AdvantageDescriptorProvider } from '../advantageDescriptor.provider';
import { LooksSource } from './looks.source';
import { DescriptionTraitSource } from './descriptionTrait.source';
import { Trait } from '../trait/trait';

export class AllyProvider {
  private readonly looksProvider = new AdvantageDescriptorProvider(new LooksSource());

  private readonly descriptionTraitProvider = new AdvantageDescriptorProvider(new DescriptionTraitSource());

  get(parties: Array<Party>, description: string, traits: Array<Trait>) {
    const country = this.getCountryFromParties(parties);
    const allyDescription = this.getDescription(country);

    const name = this.getName(allyDescription.gender, allyDescription.nationality);

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
    const looks = this.looksProvider.get(race, 2);
    const traits = this.descriptionTraitProvider.get(race, 2);

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
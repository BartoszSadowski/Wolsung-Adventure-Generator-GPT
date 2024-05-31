import { AllyAdvantage, AllyDescription } from './ally.advantage';
import { getRandomRace } from '../../../world/race';
import { Country } from '../../../world/country';
import { Gender, getRandomGender } from './gender';
import { getRandomName, getRandomSurname } from '../../../world/name';
import { AdvantageDescriptorProvider } from '../advantageDescriptor.provider';
import { LooksSource } from './looks.source';
import { DescriptionTraitSource } from './descriptionTrait.source';
import { Trait } from '../trait/trait';
import { Parties } from '../../../party/parties';

export class AllyProvider {
  private readonly looksProvider = new AdvantageDescriptorProvider(new LooksSource());

  private readonly descriptionTraitProvider = new AdvantageDescriptorProvider(new DescriptionTraitSource());

  get(parties: Parties, description: string, traits: Array<Trait>) {
    const country = this.getCountryFromParties(parties);
    const additionalDescription = this.getDescription(country);

    const name = this.getName(additionalDescription.gender, additionalDescription.nationality);

    return new AllyAdvantage(
      name,
      description,
      traits,
      additionalDescription,
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

  private getCountryFromParties(parties: Parties): Country {
    const placeOfAction = parties.getPlaceOfAction();
    return placeOfAction.country;
  }

  private getName(gender: Gender, country: Country) {
    return `${getRandomName(gender, country)} ${getRandomSurname(country)}`;
  }
}
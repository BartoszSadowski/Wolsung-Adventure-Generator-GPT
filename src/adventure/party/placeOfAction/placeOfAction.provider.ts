import { PlaceOfActionParty } from './placeOfAction.party';
import { worldMap } from '../../world/worldMap';
import { getRandomElement } from '../../../utility/random/list.utils';
import { Country } from '../../world/country';

export class PlaceOfActionProvider {
  get() {
    const { country, city } = this.getRandomCountryCityPair();

    return new PlaceOfActionParty(country, city);
  }

  getRandomCountryCityPair() {
    const [country, cities] = getRandomElement(Object.entries(worldMap)) as [Country, Array<string>];

    return {
      country,
      city: getRandomElement(cities),
    };
  }
}
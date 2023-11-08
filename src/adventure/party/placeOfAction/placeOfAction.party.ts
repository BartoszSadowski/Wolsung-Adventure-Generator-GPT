import { Party } from '../party';
import { PartyType } from '../partyType';
import { Country } from '../../world/country';

export class PlaceOfActionParty extends Party {
  partyType = PartyType.PLACE_OF_ACTION;

  constructor(
    public readonly country: Country,
    public readonly city: string,
  ) {
    super();
  }

}
import { Party } from '../party';
import { PartyType } from '../partyType';

export class LocationParty extends Party {
  partyType = PartyType.LOCATION;

  constructor(
    public readonly type: string,
  ) {
    super();
  }

}
import { Party } from '../party';
import { PartyType } from '../partyType';

export class TeamParty extends Party {
  partyType = PartyType.TEAM;

}
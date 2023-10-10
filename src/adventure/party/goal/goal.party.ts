import { Party } from '../party';
import { PartyType } from '../partyType';

export class GoalParty extends Party {
  partyType = PartyType.GOAL;

  constructor(
    public type: string,
    public name?: string,
    public securityMeasures?: Array<string>,
  ) {
    super();
  }
}
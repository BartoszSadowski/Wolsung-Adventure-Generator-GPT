import { Party } from '../party';
import { PartyType } from '../partyType';

export class GoalParty extends Party {
  partyType = PartyType.GOAL;

  constructor(
    public readonly type: string,
    public readonly name: string,
  ) {
    super();
  }
}
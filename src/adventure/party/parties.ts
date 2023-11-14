import { PartyType } from './partyType';
import { Party } from './party';
import { PlaceOfActionParty } from './placeOfAction/placeOfAction.party';
import { GoalParty } from './goal/goal.party';
import { AntagonistParty } from './antagonist/antagonist.party';

export class Parties {

  private readonly data = new Map<PartyType, Party>();

  constructor(parties: Array<Party>) {
    parties.forEach(party => {
      if (this.data.get(party.partyType)) {
        throw new Error('Multiple parties of same type provided');
      }

      this.data.set(party.partyType, party);
    });
  }

  getPlaceOfAction(): PlaceOfActionParty {
    const placeOfAction = this.data.get(PartyType.PLACE_OF_ACTION) as PlaceOfActionParty;

    if (!placeOfAction) {
      throw new Error('No place of action defined');
    }

    return placeOfAction;
  }

  getGoalParty(): GoalParty {
    const goal = this.data.get(PartyType.GOAL) as GoalParty;

    if (!goal) {
      throw new Error('No goal defined');
    }

    return goal;
  }

  getAntagonistParty(): AntagonistParty {
    const antagonist = this.data.get(PartyType.ANTAGONIST) as AntagonistParty;

    if (!antagonist) {
      throw new Error('No antagonist defined');
    }

    return antagonist;
  }

  getParty(type: PartyType) {
    return this.data.get(type);
  }

  has(type: PartyType) {
    return this.data.has(type);
  }

  add(party: Party) {
    const type = party.partyType;
    if (this.data.has(type)) {
      throw  new Error('Party already defined');
    }

    this.data.set(type, party);
  }


  toJson() {
    return JSON.stringify(Object.fromEntries(this.data), null, '    ');
  }

}

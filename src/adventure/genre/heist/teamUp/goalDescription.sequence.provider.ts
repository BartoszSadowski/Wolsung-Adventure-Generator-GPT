import { Party } from '../../../party/party';
import { PartyType } from '../../../party/partyType';
import { GoalParty } from '../../../party/goal/goal.party';
import { relationType } from '../../../party/relation';
import { LocationParty } from '../../../party/location/location.party';
import { TreasureProvider } from '../../../party/goal/treasure.provider';
import { AntagonistParty } from '../../../party/antagonist/antagonist.party';

export class GoalDescriptionSequenceProvider {
  private readonly treasureProvider = new TreasureProvider();

  get(parties: Party[]) {
    return {
      who: this.getGoal(parties),
      what: 'zostaje opisany',
    };
  }

  getGoal(parties: Party[]) {
    const goalParty = parties.find((party) => party.partyType === PartyType.GOAL) as GoalParty;
    const locationParty = parties.find((party) =>
      party.partyType === PartyType.LOCATION
      && party.relations.some(relation =>
        relation.target === PartyType.GOAL
        && relation.type === relationType.LOCATION.CONTAINS)) as LocationParty;
    const antagonistParty = parties.find(party => party.partyType === PartyType.ANTAGONIST) as AntagonistParty;

    return this.getName(goalParty, locationParty, antagonistParty);
  }

  getName(goalParty: GoalParty, locationParty: LocationParty, antagonistParty: AntagonistParty) {
    const name = goalParty.name;
    if (name) return name;

    const treasure = this.treasureProvider.getFromParties([goalParty, locationParty, antagonistParty]);
    goalParty.name = treasure.name;
    goalParty.securityMeasures = treasure.securityMeasures;

    return goalParty.name;
  }
}

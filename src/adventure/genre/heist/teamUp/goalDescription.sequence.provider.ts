import { ScenePartProvider } from '../../../scene/scenePart.provider';
import { SequenceElement } from '../../../scene/scene';
import { Party } from '../../../party/party';
import { PartyType } from '../../../party/partyType';
import { LocationBuilder } from '../../../location/locationBuilder';
import { GoalParty } from '../../../party/goal/goal.party';
import { relationType } from '../../../party/relation';
import { LocationParty } from '../../../party/location/location.party';
import { TreasureProvider } from '../../../party/goal/treasure.provider';
import { AntagonistParty } from '../../../party/antagonist/antagonist.party';

export class GoalDescriptionSequenceProvider extends ScenePartProvider<SequenceElement> {
  private readonly treasureProvider = new TreasureProvider();

  get(parties: Party[], locationBuilder: LocationBuilder) {
    return {
      who: this.getGoal(parties),
      what: 'todo',
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
    console.log(`treasure: ${JSON.stringify(treasure)}`);
    goalParty.name = treasure.name;


    return goalParty.name;
  }
}

import { GoalParty } from '../../../party/goal/goal.party';
import { TreasureProvider } from '../../../party/goal/treasure.provider';
import { AntagonistParty } from '../../../party/antagonist/antagonist.party';
import { Parties } from '../../../party/parties';

export class GoalDescriptionSequenceProvider {
  private readonly treasureProvider = new TreasureProvider();

  get(parties: Parties) {
    return {
      who: this.getGoal(parties),
      what: 'zostaje opisany',
    };
  }

  getGoal(parties: Parties) {
    const goalParty = parties.getGoalParty();
    const antagonistParty = parties.getAntagonistParty();

    return this.getName(goalParty, antagonistParty);
  }

  getName(goalParty: GoalParty, antagonistParty: AntagonistParty) {
    const name = goalParty.name;
    if (name) return name;

    const treasure = this.treasureProvider.getFromParties([goalParty, antagonistParty]);
    goalParty.name = treasure.name;
    goalParty.securityMeasures = treasure.securityMeasures;

    return goalParty.name;
  }
}

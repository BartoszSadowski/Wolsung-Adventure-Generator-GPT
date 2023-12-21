import { SequenceElement } from '../../../scene/scene';
import { Parties } from '../../../party/parties';
import { GoalParty } from '../../../party/goal/goal.party';
import { AntagonistParty } from '../../../party/antagonist/antagonist.party';
import { TreasureProvider } from '../../../party/goal/treasure.provider';

export class LearnGoalWrapper {
  private readonly treasureProvider = new TreasureProvider();

  constructor(private readonly parties: Parties) {
  }

  wrap(sequenceElement: SequenceElement): SequenceElement {
    return {
      ...sequenceElement,
      what: `dowiaduje się o ${this.getGoal()}`,
    };
  }

  getGoal() {
    const goalParty = this.parties.getGoalParty();
    const antagonistParty = this.parties.getAntagonistParty();

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
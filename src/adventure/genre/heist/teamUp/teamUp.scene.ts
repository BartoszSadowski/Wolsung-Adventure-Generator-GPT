import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { LearnAboutGoalSequenceProvider } from './learnAboutGoal.sequence.provider';
import { GoalDescriptionSequenceProvider } from './goalDescription.sequence.provider';
import { Parties } from '../../../party/parties';

export class TeamUpScene extends Scene {
  private readonly learnAboutProvider = new LearnAboutGoalSequenceProvider();

  private readonly goalDescriptionProvider = new GoalDescriptionSequenceProvider();

  constructor(parties: Parties) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.prepareWhere();
  }

  private prepareWhere() {
    const location = this.locationBuilder.getLocation();
    const placeOfAction = this.parties.getPlaceOfAction();

    this.where = `${location} - ${placeOfAction.city} - ${placeOfAction.country}`;
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Przedstawić się przed współgraczami');
  }

  private prepareSequence() {
    this.sequence.push(this.learnAboutProvider.get(this.parties, this.locationBuilder));
    this.sequence.push(this.goalDescriptionProvider.get(this.parties));
  }
}
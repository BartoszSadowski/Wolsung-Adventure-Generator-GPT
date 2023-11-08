import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';
import { LearnAboutGoalSequenceProvider } from './learnAboutGoal.sequence.provider';
import { GoalDescriptionSequenceProvider } from './goalDescription.sequence.provider';
import { PlaceOfActionParty } from '../../../party/placeOfAction/placeOfAction.party';

export class TeamUpScene extends Scene {
  private readonly learnAboutProvider = new LearnAboutGoalSequenceProvider();

  private readonly goalDescriptionProvider = new GoalDescriptionSequenceProvider();


  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.prepareWhere();
  }

  private prepareWhere() {
    const location = this.locationBuilder.getLocation();
    const placeOfAction = this.parties
      .find(party => party.partyType === PartyType.PLACE_OF_ACTION) as unknown as PlaceOfActionParty;

    this.where = `${location} - ${placeOfAction.city} - ${placeOfAction.country}`;
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Przedstawić się przed współgraczami');
  }

  private prepareSequence() {
    this.learnAboutGoal();
    this.goalDescription();
  }

  private learnAboutGoal() {
    this.sequence.push(this.learnAboutProvider.get(this.parties, this.locationBuilder));
  }

  private goalDescription() {
    this.sequence.push(this.goalDescriptionProvider.get(this.parties));
  }
}
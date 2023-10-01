import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';
import { LearnAboutGoalSequenceProvider } from './learnAboutGoal.sequence.provider';

export class TeamUpScene extends Scene {
  private readonly learnAboutProvider = new LearnAboutGoalSequenceProvider();


  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.where = this.locationBuilder.getLocation();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Popisać się przed współgraczami');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }

  private prepareSequence() {
    this.learnAboutGoal();
  }

  private learnAboutGoal() {
    this.sequence.push(this.learnAboutProvider.get(this.parties, this.locationBuilder));
  }
}
import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Parties } from '../../../party/parties';
import { SneakOutSequenceProvider } from './sneakOut/sneakOut.sequence.provider';
import { ChaseSequenceProvider } from './chase/chase.sequence.provider';

export class ComplicationScene extends Scene {
  private readonly sneakOutSequenceProvider = new SneakOutSequenceProvider();

  private readonly chaseSequenceProvider = new ChaseSequenceProvider();

  constructor(parties: Parties) {
    super(parties);
    this.addGoals();
    this.prepareWhere();
    this.prepareSequence();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Podbić ekscytację');
    this.addGoal(PartyType.TEAM, 'Uciec z miejsca zdarzenia');
    this.addGoal(PartyType.ANTAGONIST, 'Powstrzymać postaci graczy');
  }

  private prepareWhere() {
    const locationTags: Array<string> = this.parties.getGoalParty().properties.location || [];
    locationTags.forEach(tag => this.locationBuilder.addTag(tag));

    this.where = this.locationBuilder.getLocation();
  }

  private prepareSequence() {
    this.sequence.push(this.sneakOutSequenceProvider.get(this.where));
    this.sequence.push(this.chaseSequenceProvider.get(this.parties));
  }
}

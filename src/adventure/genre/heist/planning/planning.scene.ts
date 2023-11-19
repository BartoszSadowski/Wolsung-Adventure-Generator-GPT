import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { PreparationsSequenceProvider } from './preparations.sequence.provider';
import { Parties } from '../../../party/parties';

export class PlanningScene extends Scene {
  private readonly preparationsProvider = new PreparationsSequenceProvider();

  constructor(parties: Parties) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.prepareWhere();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić trudności w osiągnięciu celu');
    this.addGoal(PartyType.TEAM, 'Przygotować się do akcji');
  }

  private prepareWhere() {
    this.where = this.parties.getPlaceOfAction().city;
  }

  private prepareSequence() {
    this.sequence.push(this.preparationsProvider.get(this.parties, this.advantages));
  }
}
import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';
import { locationTags } from '../../../location/locationTags';
import { PreparationsSequenceProvider } from './preparations.sequence.provider';

export class PlanningScene extends Scene {
  private readonly preparationsProvider = new PreparationsSequenceProvider();

  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.prepareWhere();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić trudności w osiągnięciu celu');
    this.addGoal(PartyType.TEAM, 'Przygotować się do akcji');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');

  }

  private prepareWhere() {
    this.locationBuilder.addTag(locationTags.CITY);
    this.locationBuilder.addTag(locationTags.BROAD);
    this.where = this.locationBuilder.getLocation();
  }

  private prepareSequence() {
    this.prepare();
  }

  private prepare() {
    this.sequence.push(this.preparationsProvider.get(this.parties));
  }


}
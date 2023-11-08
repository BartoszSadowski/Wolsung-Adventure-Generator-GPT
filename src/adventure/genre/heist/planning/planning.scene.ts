import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';
import { PreparationsSequenceProvider } from './preparations.sequence.provider';
import { PlaceOfActionParty } from '../../../party/placeOfAction/placeOfAction.party';

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
    const placeOfAction = this.parties
      .find(party => party.partyType === PartyType.PLACE_OF_ACTION) as unknown as PlaceOfActionParty;
    this.where = placeOfAction.city;
  }

  private prepareSequence() {
    this.prepare();
  }

  private prepare() {
    this.sequence.push(this.preparationsProvider.get(this.parties, this.advantages));
  }


}
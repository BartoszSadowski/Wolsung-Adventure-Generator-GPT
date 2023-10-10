import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';

export class PlanningScene extends Scene {
  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoal(PartyType.GM, 'Przedstawić trudności w osiągnięciu celu');
    this.addGoal(PartyType.TEAM, 'Przygotować się do akcji');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }
}
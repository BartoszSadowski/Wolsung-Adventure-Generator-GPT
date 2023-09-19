import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';

export class TeamUpScene extends Scene {

  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoals();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Popisać się przed współgraczami');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }
}
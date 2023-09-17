import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { InitialConditionsProvider } from './initialConditions.provider';
import { Party } from '../../../party/party';

export class TeamUpScene extends Scene {
  private readonly initialConditionsProvider = new InitialConditionsProvider();

  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoals();
    this.setInitialConditions();
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Popisać się przed współgraczami');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }

  private setInitialConditions() {
    this.initialConditions = this.initialConditionsProvider.get(this.parties);
  }
}
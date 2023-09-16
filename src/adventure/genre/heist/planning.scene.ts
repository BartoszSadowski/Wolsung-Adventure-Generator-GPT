import { Scene } from '../../scene/scene';
import { PartyType } from '../../party/partyType';

export class PlanningScene extends Scene {
  constructor() {
    super();
    this.addGoal(PartyType.GM, 'Przedstawić trudności w osiągnięciu celu');
  }
}
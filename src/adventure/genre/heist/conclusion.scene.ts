import { Scene } from '../../scene/scene';
import { PartyType } from '../../party/partyType';

export class ConclusionScene extends Scene {
  constructor() {
    super();
    this.addGoal(PartyType.GM, 'Wyciszyć graczy, dać nacieszyć się zwycięstwem');
  }
}
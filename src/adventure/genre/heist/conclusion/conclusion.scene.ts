import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Parties } from '../../../party/parties';

export class ConclusionScene extends Scene {
  constructor(parties: Parties) {
    super(parties);
    this.addGoal(PartyType.GM, 'Wyciszyć graczy, dać nacieszyć się zwycięstwem');
  }

  // TODO
  // Predefiniowany json umożliwiający przygotowanie ciekawego opisu opisujący następstwa sukcesu i porażki
}
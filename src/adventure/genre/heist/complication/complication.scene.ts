import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Parties } from '../../../party/parties';

export class ComplicationScene extends Scene {
  constructor(parties: Parties) {
    super(parties);
    this.addGoal(PartyType.GM, 'Podbić ekscytację');
  }

  // TODO
  // Wygeneruj możliwość wyślizgnięcia się i pościgu (możliwy jeśli nie udało się wyślizgnąć, lub jeśli zrezegnowano)
  // Generowany poziom trudności
  // Generowane zagrożenia i szanse dla wyślizgnięcia
  // Generowane zagrożenia i szanse dla pościgu
}
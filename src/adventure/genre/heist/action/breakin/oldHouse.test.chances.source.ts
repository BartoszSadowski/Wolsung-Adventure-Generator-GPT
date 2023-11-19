import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { ChanceSystem } from '../../../../system/cards/chance.system';

export class OldHouseTestChancesSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [
      ChanceSystem.regenerateAttribute(Color.CLUBS, 'Nexus w sercu sali balowej'),
      ChanceSystem.lead(Color.CLUBS, 'Skandal'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.DIAMONDS, 'Zakłady'),
      ChanceSystem.regenerateAttribute(Color.DIAMONDS, 'Srebrna zastawa'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.HEARTS, 'Herbatka'),
      ChanceSystem.regenerateAttribute(Color.HEARTS, 'Drzemka na szezlongu'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      ChanceSystem.lead(Color.SPADES, 'Dyskretne wymknięcie się na tyłu domu'),
      ChanceSystem.regainAttribute(Color.SPADES, 'Zajmująca anegdotka'),
    ];
  }

}
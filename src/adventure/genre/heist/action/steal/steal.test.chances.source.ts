import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { ChanceSystem } from '../../../../system/cards/chance.system';

export class StealTestChancesSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [
      ChanceSystem.temporaryAdvantage(Color.CLUBS, 'Bateria maniczna'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      ChanceSystem.temporaryAdvantage(Color.DIAMONDS, 'Peleryna niewidka'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      ChanceSystem.regenerateAttribute(Color.HEARTS, 'Przypływ adrenaliny'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.SPADES, 'Zimna krew'),
    ];
  }

}
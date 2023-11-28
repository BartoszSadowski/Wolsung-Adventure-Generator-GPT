import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { ChanceSystem } from '../../../../system/cards/chance.system';

export class ChaseTestChancesSource implements CardSource {
  getSpades(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.SPADES, 'znam niezły skrót'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      ChanceSystem.regenerateAttribute(Color.HEARTS, 'tu nas nie znajdą'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.DIAMONDS, 'to może mi się jeszcze przydać'),
    ];
  }

  getClubs(): Array<CardEffect> {
    return [
      ChanceSystem.regenerateAttribute(Color.CLUBS, 'Nexus w tym miejscu?'),
    ];
  }

}
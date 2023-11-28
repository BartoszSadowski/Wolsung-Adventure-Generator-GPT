import { CardSource } from '../../scene/card.source';
import { CardEffect, Color } from '../../system/cards/card';
import { DangerSystem } from '../../system/cards/danger.system';

export class OldHouseTestDangersSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.CLUBS, 'Hiptontyczna muzyka'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.DIAMONDS, 'Zakłady'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'Gorąca kawa'),
      DangerSystem.loseAttribute(Color.HEARTS, 'Spadający żyrandol'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.SPADES, 'Plotki'),
      DangerSystem.loseAttribute(Color.SPADES, 'Niestosowna poufałość'),
    ];
  }

}
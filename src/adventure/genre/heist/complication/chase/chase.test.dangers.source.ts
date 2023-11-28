import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { DangerSystem } from '../../../../system/cards/danger.system';

export class ChaseTestDangersSource implements CardSource {
  getSpades(): Array<CardEffect> {
    return [
      DangerSystem.destroyAdvantage(Color.SPADES, 'zostałem rozpoznany'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'wysiłek ponad siły'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.DIAMONDS, 'w pośpiechu wszystko mi się zawieruszy'),
    ];
  }

  getClubs(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.CLUBS, 'wyładowanie maniczne'),
    ];
  }

}
import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { DangerSystem } from '../../../../system/cards/danger.system';

export class StealTestDangersSource implements CardSource {
  constructor(private readonly security: Array<string>) {
  }

  getClubs(): Array<CardEffect> {
    return [
      DangerSystem.lead(Color.CLUBS, 'Alarm'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.lead(Color.DIAMONDS, 'To nie to pomieszczenie'),
    ];
  }

  getHearts(): Array<CardEffect> {
    const security = this.security[0];
    if (security) {
      return [
        DangerSystem.loseAdvantage(Color.HEARTS, security),
      ];
    }

    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'To dalej niż myślałem'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.SPADES, 'Tego nie przewidziałem'),
    ];
  }

}
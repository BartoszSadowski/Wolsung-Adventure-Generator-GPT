import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { DangerSystem } from '../../../../system/cards/danger.system';

export class MuseumTestDangersSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.CLUBS, 'Artefakt o przytłaczającej aurze'),
      DangerSystem.loseAdvantage(Color.CLUBS, 'Szklana kula odcina od zaklęcia'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.destroyAdvantage(Color.DIAMONDS, 'Interferencja z artefaktem'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'Czy ta katana naprawdę jest tak ostra?'),
      DangerSystem.loseAdvantage(Color.HEARTS, 'Zdrada'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      DangerSystem.lead(Color.SPADES, 'Rozpoznawalna twarz zwraca na siebie uwagę'),
    ];
  }

}
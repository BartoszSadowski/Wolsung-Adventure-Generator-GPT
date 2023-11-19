import { CardEffect, Color } from '../../../system/cards/card';
import { DangerSystem } from '../../../system/cards/danger.system';
import { CardSource } from '../../../scene/card.source';

export class PreparationsTestDangersSource implements CardSource {
  public getSpades(): Array<CardEffect> {
    return [
      DangerSystem.lead(Color.SPADES, 'Przeciwnik dowiaduje się o planach drużyny'),
      DangerSystem.loseAttribute(Color.SPADES, 'Niechciane spotkanie'),
    ];
  }

  public getHearts(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'Otwarta studzienka ściekowa'),
      DangerSystem.loseAttribute(Color.HEARTS, 'Szkodliwe używki'),
    ];
  }

  public getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.DIAMONDS, 'Kieszonkowiec'),
      DangerSystem.loseAttribute(Color.DIAMONDS, 'Hazard'),
      DangerSystem.loseAttribute(Color.DIAMONDS, 'Długi karciane'),
    ];
  }

  public getClubs(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.CLUBS, 'Zwarcie instalacji manicznej'),
      DangerSystem.loseAttribute(Color.CLUBS, 'Zbytnie folgowanie pokusom'),
    ];
  }
}
import { CardEffect, Color } from '../../../system/cards/card';
import { DangerSystem } from '../../../system/cards/danger.system';

export class PreparationsTestDangersSource {
  public static getSpades(): Array<CardEffect> {
    return [
      DangerSystem.lead(Color.SPADES, 'Przeciwnik dowiaduje się o planach drużyny'),
      DangerSystem.loseAttribute(Color.SPADES, 'Niechciane spotkanie'),
    ];
  }

  public static getHearts(): Array<CardEffect> {
    return [
      DangerSystem.loseAttribute(Color.HEARTS, 'Otwarta studzienka ściekowa'),
      DangerSystem.loseAttribute(Color.HEARTS, 'Szkodliwe używki'),
    ];
  }


  public static getDiamonds(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.DIAMONDS, 'Kieszonkowiec'),
      DangerSystem.loseAttribute(Color.DIAMONDS, 'Hazard'),
      DangerSystem.loseAttribute(Color.DIAMONDS, 'Długi karciane'),
    ];
  }

  public static getClubs(): Array<CardEffect> {
    return [
      DangerSystem.loseAdvantage(Color.CLUBS, 'Zwarcie instalacji manicznej'),
      DangerSystem.loseAttribute(Color.CLUBS, 'Zbytnie folgowanie pokusom'),
    ];
  }

}
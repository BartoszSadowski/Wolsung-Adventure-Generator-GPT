import { CardEffect, Color } from '../../../system/cards/card';

export class PreparationsTestDangersSource {
  public static getSpades(): Array<CardEffect> {
    return ['']
      .map(description => new CardEffect(
        Color.SPADES,
        description,
        '',
      ));
  }

  public static getHearts(): Array<CardEffect> {
    return ['']
      .map(description => new CardEffect(
        Color.HEARTS,
        description,
        '',
      ));
  }


  public static getDiamonds(): Array<CardEffect> {
    return ['']
      .map(description => new CardEffect(
        Color.DIAMONDS,
        description,
        '',
      ));
  }

  public static getClubs(): Array<CardEffect> {
    return ['']
      .map(description => new CardEffect(
        Color.CLUBS,
        description,
        '',
      ));
  }

}
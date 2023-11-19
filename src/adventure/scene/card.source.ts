import { CardEffect } from '../system/cards/card';

export interface CardSource {
  getSpades(): Array<CardEffect>;

  getHearts(): Array<CardEffect>;

  getDiamonds(): Array<CardEffect>;

  getClubs(): Array<CardEffect>;
}
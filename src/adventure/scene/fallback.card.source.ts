import { CardSource } from './card.source';
import { CardEffect } from '../system/cards/card';

export class FallbackCardSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [];
  }

  getDiamonds(): Array<CardEffect> {
    return [];
  }

  getHearts(): Array<CardEffect> {
    return [];
  }

  getSpades(): Array<CardEffect> {
    return [];
  }

}
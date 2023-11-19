import { CardSource } from '../../../../scene/card.source';
import { CardEffect, Color } from '../../../../system/cards/card';
import { ChanceSystem } from '../../../../system/cards/chance.system';

export class MuseumTestChancesSource implements CardSource {
  getClubs(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.CLUBS, 'Artefakt zza morza'),
    ];
  }

  getDiamonds(): Array<CardEffect> {
    return [
      ChanceSystem.regenerateAttribute(Color.DIAMONDS, 'Złota moneta na wyciągnięcie ręki'),
    ];
  }

  getHearts(): Array<CardEffect> {
    return [
      ChanceSystem.lead(Color.CLUBS, 'Boczne przejście, możliwość przemknięcia niezauważonym'),
      ChanceSystem.regainAttribute(Color.CLUBS, 'Posil się w bufecie'),
    ];
  }

  getSpades(): Array<CardEffect> {
    return [
      ChanceSystem.healWound(Color.SPADES, 'Zaimponuj wiedzą o eksponacie'),
    ];
  }
}
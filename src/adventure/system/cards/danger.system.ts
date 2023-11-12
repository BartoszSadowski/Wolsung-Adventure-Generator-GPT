import { Attribute } from '../resource/attribute';
import { AdvantageType } from '../advantage/advantage';
import { CardEffect, Color, colorAdvantageMapping, colorAttributeMapping } from './card';

const effects = {
  lead: () => 'Przeciwnik zyskuje przewagę, poziom napięcia wzrasta',
  loseAttribute: (attribute: Attribute) => `Jedna z postaci traci punkt atrybutu (${attribute})`,
  loseAdvantage: (advantage: AdvantageType) => `Jedna z postaci traci atut do końca sesji (${advantage})`,
  destroyAdvantage: (advantage: AdvantageType) =>
    `Jedna z postaci traci atut do końca sesji (${advantage}). Po sesji atut musi zostać zastąpoiony nowym.`,
};

export class DangerSystem {
  static lead(color: Color, description: string) {
    return new CardEffect(
      color,
      description,
      effects.lead(),
    );
  }

  static loseAttribute(color: Color, description: string) {
    const attribute = colorAttributeMapping[color];

    return new CardEffect(
      color,
      description,
      effects.loseAttribute(attribute),
    );
  }

  static loseAdvantage(color: Color, description: string) {
    const advantage = colorAdvantageMapping[color];

    return new CardEffect(
      color,
      description,
      effects.loseAdvantage(advantage),
    );
  }

  static destroyAdvantage(color: Color, description: string) {
    const advantage = colorAdvantageMapping[color];

    return new CardEffect(
      color,
      description,
      effects.loseAdvantage(advantage),
    );
  }
}

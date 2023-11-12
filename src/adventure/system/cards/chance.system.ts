import { CardEffect, Color, colorAdvantageMapping, colorAttributeMapping, colorWoundMapping } from './card';
import { Attribute } from '../resource/attribute';
import { AdvantageType } from '../advantage/advantage';
import { Wound } from '../resource/wound';

const effects = {
  information: () => 'Drużyna uzyskuje cenną informację',
  lead: () => 'Drużyna krzyżuje plany przeciwnika, obniż poziom napięcia',
  regainAttribute: (attribute: Attribute) => `Jedna z postaci odzyskuje punkt atrybutu (${attribute})`,
  regenerateAttribute: (attribute: Attribute) => `Jedna z postaci odzyskuje wszystkie punkty atrybutu (${attribute})`,
  temporaryAdvantage: (advantage: AdvantageType) => `Drużyna uzyskuje tymczasowy atut (${advantage})`,
  healWound: (wound: Wound) => `Jedna z postaci może natychmiast wyleczyć ranę (${wound})`,
};

export class ChanceSystem {
  static information(color: Color, description: string) {
    return new CardEffect(
      color,
      description,
      effects.information(),
    );
  }

  static lead(color: Color, description: string) {
    return new CardEffect(
      color,
      description,
      effects.lead(),
    );
  }

  static regainAttribute(color: Color, description: string) {
    const attribute = colorAttributeMapping[color];

    return new CardEffect(
      color,
      description,
      effects.regainAttribute(attribute),
    );
  }

  static regenerateAttribute(color: Color, description: string) {
    const attribute = colorAttributeMapping[color];

    return new CardEffect(
      color,
      description,
      effects.regenerateAttribute(attribute),
    );
  }

  static temporaryAdvantage(color: Color, description: string) {
    const advantage = colorAdvantageMapping[color];

    return new CardEffect(
      color,
      description,
      effects.temporaryAdvantage(advantage),
    );
  }

  static healWound(color: Color, description: string) {
    const wound = colorWoundMapping[color];

    return new CardEffect(
      color,
      description,
      effects.healWound(wound),
    );
  }
}

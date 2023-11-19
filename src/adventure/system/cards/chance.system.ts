import { CardEffect, Color, colorAdvantageMapping, colorAttributeMapping, colorWoundMapping } from './card';
import { Attribute } from '../resource/attribute';
import { AdvantageType } from '../advantage/advantage';
import { Wound } from '../resource/wound';

enum ChanceName {
  INFORMATION = 'Informacja',
  LEAD = 'Przewaga',
  REGAIN_ATTRIBUTE = 'Odzyskanie atrybutu',
  REGENERATE_ATTRIBUTE = 'Regeneracja atrybutu',
  TEMPORARY_ADVANTAGE = 'Tymczasowy atut',
  HEAL_WOUND = 'Wyleczenie rany',
}

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
      ChanceName.INFORMATION,
      effects.information(),
    );
  }

  static lead(color: Color, description: string) {
    return new CardEffect(
      color,
      description,
      ChanceName.LEAD,
      effects.lead(),
    );
  }

  static regainAttribute(color: Color, description: string) {
    const attribute = colorAttributeMapping[color];

    return new CardEffect(
      color,
      description,
      ChanceName.REGAIN_ATTRIBUTE,
      effects.regainAttribute(attribute),
    );
  }

  static regenerateAttribute(color: Color, description: string) {
    const attribute = colorAttributeMapping[color];

    return new CardEffect(
      color,
      description,
      ChanceName.REGENERATE_ATTRIBUTE,
      effects.regenerateAttribute(attribute),
    );
  }

  static temporaryAdvantage(color: Color, description: string) {
    const advantage = colorAdvantageMapping[color];

    return new CardEffect(
      color,
      description,
      ChanceName.TEMPORARY_ADVANTAGE,
      effects.temporaryAdvantage(advantage),
    );
  }

  static healWound(color: Color, description: string) {
    const wound = colorWoundMapping[color];

    return new CardEffect(
      color,
      description,
      ChanceName.HEAL_WOUND,
      effects.healWound(wound),
    );
  }
}

import { Ability } from './ability';

enum AbilityName {
  ATTACK = 'atak',
  ISOLATION = 'izolacja',
  INVULNERABILITY = 'nietykalność',
  TENACITY = 'nieustępliwość',
  ARMOR = 'pancerz',
  REGENERATION = 'regeneracja',
  TROUBLE = 'utrudnienia',
  SUPPORT = 'wsparcie',
}

const effects = {
  attack: () => 'Automatyczne zagrożenie nie wymagające karty. Żeby je rozbroić potrzebny jest jeden sukces.',
  isolation: () => 'Postać w danej sytuacji nie może, przez jedną scenę, zagrywać ani przyjmować kart wsparcia.',
  invulnerability: () => 'W danej sytuacji by zagrać kartę z archetypu, postać musi wydać punkt atrybutu.',
  tenacity: () => 'Nierowiązane zagrożenia tego typu zostają na stole na kolejną rundę.',
  armor: () =>
    'Raz w czasie starcia MG może opisać jak pancerz chroni przeciwnika i zagrać dodatkowe zagrożenie.' +
    ' Zagrożenie "przechwytuje" sukcesy z ataków konkretnego typu,' +
    ' aż nie zbierze ich wystarczająco wiele by zostać usunięte.',
  regeneration: () =>
    'Raz na scenę, jeżeli postać straci, w wyniku tego zagrożenia, punkt wskazanego atrybutu,' +
    ' MG może opisać jak przeciwnik odzyskuje siłu i zagrać dodatkowe zagrożenie.' +
    ' Jego trudność zwiększa liczbę sukcesów, które postaci muszą zebrać.',
  trouble: () =>
    'Raz na scenę, szansa lub zagrożenie związane z daną sytuacją wymaga odłożenia jednego sukcesu więcej.',
  support: () => 'Raz na scenę, MG opisuje pojawiające się wsparcie i zagrywa dodatkowe zagrożenie.' +
    ' Efektem zagrożenia są rany',
};

export class AbilitySystem {

  static attack(description: string): Ability {
    return new Ability(
      description,
      AbilityName.ATTACK,
      effects.attack(),
    );
  }

  static isolation(description: string): Ability {
    return new Ability(
      description,
      AbilityName.ISOLATION,
      effects.isolation(),
    );
  }

  static invulnerability(description: string): Ability {
    return new Ability(
      description,
      AbilityName.INVULNERABILITY,
      effects.invulnerability(),
    );
  }

  static tenacity(description: string): Ability {
    return new Ability(
      description,
      AbilityName.TENACITY,
      effects.tenacity(),
    );
  }

  static armor(description: string): Ability {
    return new Ability(
      description,
      AbilityName.ARMOR,
      effects.armor(),
    );
  }

  static regeneration(description: string): Ability {
    return new Ability(
      description,
      AbilityName.REGENERATION,
      effects.regeneration(),
    );
  }

  static trouble(description: string): Ability {
    return new Ability(
      description,
      AbilityName.TROUBLE,
      effects.trouble(),
    );
  }

  static support(description: string): Ability {
    return new Ability(
      description,
      AbilityName.SUPPORT,
      effects.support(),
    );
  }
}
import { TestType } from '../../../../system/test/test.type';
import { CardEffect } from '../../../../system/cards/card';
import { Ability } from '../../../../system/ability/ability';

export class Section {
  constructor(
    private readonly description: string,
    private readonly test?: Test,
  ) {
  }

}

export interface Challenge {
  readonly challengeRating: number;
  readonly  toughness: number;
  readonly cards: string;
}

export class Test {
  constructor(
    private readonly type: TestType,
    private readonly result: string,
    private readonly consequence: string,
    private readonly challenge: Challenge,
    private readonly aces: string,
    private readonly dangers: Array<CardEffect>,
    private readonly chances: Array<CardEffect>,
    private readonly abilities: Array<Ability>,
    private readonly modifiers: string,
  ) {
  }
}
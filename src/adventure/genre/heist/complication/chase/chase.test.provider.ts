import { TestProvider } from '../../../../scene/test.provider';
import { Test } from '../../../../system/test/test';
import { getRandomIntInRange } from '../../../../../utility/random/number.utils';
import { CardEffect } from '../../../../system/cards/card';
import { getRandomElement } from '../../../../../utility/random/list.utils';
import { ChaseTestChancesSource } from './chase.test.chances.source';
import { ChaseTestDangersSource } from './chase.test.dangers.source';
import { Ability } from '../../../../system/ability/ability';
import { isTrue } from '../../../../../utility/random/probability.utils';
import { AbilitySystem } from '../../../../system/ability/ability.system';
import { Attribute } from '../../../../system/resource/attribute';

export class ChaseTestProvider extends TestProvider {
  get(result: string, consequences: string): Test {
    return super.getTestBuilder(
      result,
      consequences,
      this.getChallengeRating(),
    )
      .modifiers(['Za każdy punkt napięcia trudność testu zwiększona o 5.'])
      .dangers(this.getDangers())
      .chances(this.getChances())
      .abilities(this.getAbilities())
      .build();
  }

  private getChances(): Array<CardEffect> {
    const chanceSource = new ChaseTestChancesSource();

    const spades = getRandomElement(chanceSource.getSpades());
    const hearts = getRandomElement(chanceSource.getHearts());
    const diamonds = getRandomElement(chanceSource.getDiamonds());
    const clubs = getRandomElement(chanceSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getDangers(): Array<CardEffect> {
    const dangerSource = new ChaseTestDangersSource();

    const spades = getRandomElement(dangerSource.getSpades());
    const hearts = getRandomElement(dangerSource.getHearts());
    const diamonds = getRandomElement(dangerSource.getDiamonds());
    const clubs = getRandomElement(dangerSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getAbilities(): Array<Ability> {
    if (isTrue(0.5)) return [];

    return [getRandomElement([
      AbilitySystem.regeneration(Attribute.CONDITION),
    ])];
  }

  private getChallengeRating() {
    return getRandomIntInRange(2, 4);
  }
}
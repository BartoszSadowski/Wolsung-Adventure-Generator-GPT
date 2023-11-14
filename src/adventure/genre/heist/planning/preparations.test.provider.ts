import { TestProvider } from '../../../system/test/test.provider';
import { Test } from '../../../system/test/test';
import { getRandomIntInRange } from '../../../../random/number.utils';
import { PreparationsTestDangersSource } from './preparations.test.dangers.source';
import { getRandomElement } from '../../../../random/list.utils';
import { PreparationsTestChancesSource } from './preparations.test.chances.source';
import { CardEffect } from '../../../system/cards/card';
import { Advantage } from '../../../system/advantage/advantage';
import { Parties } from '../../../party/parties';

export class PreparationsTestProvider extends TestProvider {
  get(result: string, consequence: string, parties: Parties, advantages: Array<Advantage>): Test {
    return super.getTestBuilder(
      result,
      consequence,
      this.getChallengeRating(),
    )
      .chances(this.getChances(parties, advantages))
      .dangers(this.getDangers())
      .build();
  }

  private getDangers(): Array<CardEffect> {
    const spades = getRandomElement(PreparationsTestDangersSource.getSpades());
    const hearts = getRandomElement(PreparationsTestDangersSource.getHearts());
    const diamonds = getRandomElement(PreparationsTestDangersSource.getDiamonds());
    const clubs = getRandomElement(PreparationsTestDangersSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChances(parties: Parties, advantages: Array<Advantage>): Array<CardEffect> {
    const chanceSource = new PreparationsTestChancesSource(parties, advantages);

    const spades = getRandomElement(chanceSource.getSpades());
    const hearts = getRandomElement(chanceSource.getHearts());
    const diamonds = getRandomElement(chanceSource.getDiamonds());
    const clubs = getRandomElement(chanceSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChallengeRating() {
    return getRandomIntInRange(0, 1);
  }
}
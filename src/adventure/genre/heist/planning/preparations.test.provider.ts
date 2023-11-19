import { TestProvider } from '../../../scene/test.provider';
import { getRandomIntInRange } from '../../../../utility/random/number.utils';
import { PreparationsTestDangersSource } from './preparations.test.dangers.source';
import { getRandomElement } from '../../../../utility/random/list.utils';
import { PreparationsTestChancesSource } from './preparations.test.chances.source';
import { CardEffect } from '../../../system/cards/card';
import { Advantage } from '../../../system/advantage/advantage';
import { Parties } from '../../../party/parties';
import { Test } from '../../../system/test/test';

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
    const dangerSource = new PreparationsTestDangersSource();

    const spades = getRandomElement(dangerSource.getSpades());
    const hearts = getRandomElement(dangerSource.getHearts());
    const diamonds = getRandomElement(dangerSource.getDiamonds());
    const clubs = getRandomElement(dangerSource.getClubs());

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
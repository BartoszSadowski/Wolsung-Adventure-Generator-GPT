import { TestProvider } from '../../../../scene/test.provider';
import { Parties } from '../../../../party/parties';
import { Test } from '../../../../system/test/test';
import { getRandomIntInRange } from '../../../../../utility/random/number.utils';
import { CardEffect } from '../../../../system/cards/card';
import { getRandomElement } from '../../../../../utility/random/list.utils';
import { CardSource } from '../../../../scene/card.source';
import { FallbackCardSource } from '../../../../scene/fallback.card.source';
import { Locaiton } from '../../../../location/locaiton';
import { MuseumTestChancesSource } from './museum.test.chances.source';
import { OldHouseTestChancesSource } from './oldHouse.test.chances.source';
import { OldHouseTestDangersSource } from './oldHouse.test.dangers.source';
import { MuseumTestDangersSource } from './museum.test.dangers.source';

export class BreakInTestProvider extends TestProvider {
  get(result: string, consequence: string, parties: Parties, where: string): Test {
    return super.getTestBuilder(
      result,
      consequence,
      this.getChallengeRating(),
    )
      .chances(this.getChances(where))
      .dangers(this.getDangers(where))
      .build();
  }

  private getDangers(where: string): Array<CardEffect> {
    const dangerSource = this.getDangerSource(where);

    const spades = getRandomElement(dangerSource.getSpades());
    const hearts = getRandomElement(dangerSource.getHearts());
    const diamonds = getRandomElement(dangerSource.getDiamonds());
    const clubs = getRandomElement(dangerSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChances(where: string): Array<CardEffect> {
    const chanceSource = this.getChanceSource(where);

    const spades = getRandomElement(chanceSource.getSpades());
    const hearts = getRandomElement(chanceSource.getHearts());
    const diamonds = getRandomElement(chanceSource.getDiamonds());
    const clubs = getRandomElement(chanceSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChanceSource(where: string): CardSource {
    switch (where) {
      case Locaiton.MUSEUM:
        return new MuseumTestChancesSource();
      case Locaiton.OLD_HOUSE:
        return new OldHouseTestChancesSource();
      default:
        return new FallbackCardSource();
    }
  }

  private getDangerSource(where: string): CardSource {
    switch (where) {
      case Locaiton.MUSEUM:
        return new MuseumTestDangersSource();
      case Locaiton.OLD_HOUSE:
        return new OldHouseTestDangersSource();
      default:
        return new FallbackCardSource();
    }
  }

  private getChallengeRating() {
    return getRandomIntInRange(2, 3);
  }
}
import { TestProvider } from '../../../../scene/test.provider';
import { Test } from '../../../../system/test/test';
import { getRandomIntInRange } from '../../../../../utility/random/number.utils';
import { CardEffect } from '../../../../system/cards/card';
import { getRandomElement } from '../../../../../utility/random/list.utils';
import { CardSource } from '../../../../scene/card.source';
import { Locaiton } from '../../../../location/locaiton';
import { MuseumTestDangersSource } from '../../../../location/cardProviders/museum.test.dangers.source';
import { OldHouseTestDangersSource } from '../../../../location/cardProviders/oldHouse.test.dangers.source';
import { FallbackCardSource } from '../../../../scene/fallback.card.source';
import { MuseumTestChancesSource } from '../../../../location/cardProviders/museum.test.chances.source';
import { OldHouseTestChancesSource } from '../../../../location/cardProviders/oldHouse.test.chances.source';
import { PlaceOfAction } from '../../../../scene/placeOfAction';

export class SneakOutTestProvider extends TestProvider {
  get(result: string, consequence: string, placeOfAction: PlaceOfAction): Test {
    return super.getTestBuilder(
      result,
      consequence,
      this.getChallengeRating(),
    )
      .modifiers(['Za każdy punkt napięcia trudność testu zwiększona o 5.'])
      .chances(this.getChances(placeOfAction))
      .dangers(this.getDangers(placeOfAction))
      .build();
  }

  private getChances(placeOfAction: PlaceOfAction): Array<CardEffect> {
    const chanceSource = this.getChanceSource(placeOfAction);

    const spades = getRandomElement(chanceSource.getSpades());
    const hearts = getRandomElement(chanceSource.getHearts());
    const diamonds = getRandomElement(chanceSource.getDiamonds());
    const clubs = getRandomElement(chanceSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getDangers(placeOfAction: PlaceOfAction): Array<CardEffect> {
    const dangerSource = this.getDangerSource(placeOfAction);

    const spades = getRandomElement(dangerSource.getSpades());
    const hearts = getRandomElement(dangerSource.getHearts());
    const diamonds = getRandomElement(dangerSource.getDiamonds());
    const clubs = getRandomElement(dangerSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChanceSource(placeOfAction: PlaceOfAction): CardSource {
    switch (placeOfAction.name) {
      case Locaiton.MUSEUM:
        return new MuseumTestChancesSource();
      case Locaiton.OLD_HOUSE:
        return new OldHouseTestChancesSource();
      default:
        return new FallbackCardSource();
    }
  }

  private getDangerSource(placeOfAction: PlaceOfAction): CardSource {
    switch (placeOfAction.name) {
      case Locaiton.MUSEUM:
        return new MuseumTestDangersSource();
      case Locaiton.OLD_HOUSE:
        return new OldHouseTestDangersSource();
      default:
        return new FallbackCardSource();
    }
  }

  private getChallengeRating() {
    return getRandomIntInRange(3, 5);
  }
}
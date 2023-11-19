import { TestProvider } from '../../../../scene/test.provider';
import { Test } from '../../../../system/test/test';
import { getRandomIntInRange } from '../../../../../random/number.utils';

export class StealTestProvider extends TestProvider {
  get(result: string, consequence: string): Test {
    // TODO
    // Szanse dodatkowe zyski
    // Zagrożenia wykrycie, zdrady, zabezpieczenia

    return super.getTestBuilder(
      result,
      consequence,
      this.getChallengeRating(),
    )
      // .chances(this.getChances(parties, advantages))
      // .dangers(this.getDangers())
      .build();
  }

  private getChallengeRating() {
    return getRandomIntInRange(1, 2);
  }
}
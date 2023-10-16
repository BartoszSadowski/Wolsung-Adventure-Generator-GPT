import { TestProvider } from '../../../system/test.provider';
import { Test } from '../../../system/test';
import { getRandomIntInRange } from '../../../../random/number.utils';

export class PreparationsTestProvider extends TestProvider {
  get(result: string, consequence: string): Test {
    return super.get(
      result,
      consequence,
      this.getChallengeRating(),
    );
  }

  private getChallengeRating() {
    return getRandomIntInRange(0, 1);
  }
}
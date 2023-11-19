import { Test } from '../system/test/test';
import { TestSystem } from '../system/test/test.system';

export abstract class TestProvider {
  protected getTestBuilder(result: string, consequence: string, rating: number) {
    const conversion = TestSystem.convertRating(rating);

    return Test.builder()
      .challengeRating(conversion.challengeRating)
      .cards(conversion.cards)
      .toughness(conversion.toughness)
      .testType(conversion.testType)
      .result(result)
      .consequence(consequence);
  }
}

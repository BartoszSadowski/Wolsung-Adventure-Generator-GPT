import { Test } from './test';
import { TestSystem } from './test.system';

export abstract class TestProvider {
  get(result: string, consequence: string, rating: number): Test {
    const conversion = TestSystem.convertRating(rating);

    return Test.builder()
      .challengeRating(conversion.challengeRating)
      .cards(conversion.cards)
      .toughness(conversion.toughness)
      .testType(conversion.testType)
      .result(result)
      .consequence(consequence)
      .build();
  }
}
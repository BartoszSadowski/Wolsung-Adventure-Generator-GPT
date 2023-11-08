import { TestType } from './test.type';

export interface ChallengeRatingConversion {
  toughness: number;
  challengeRating: number;
  cards: number;
  testType: TestType
}

export class TestSystem {
  private static challengeRatingMapping: Array<ChallengeRatingConversion> = [
    {
      toughness: 5,
      challengeRating: 1,
      cards: 1,
      testType: TestType.TEST,
    },
    {
      toughness: 10,
      challengeRating: 1,
      cards: 1,
      testType: TestType.TEST,
    },
    {
      toughness: 15,
      challengeRating: 2,
      cards: 2,
      testType: TestType.TEST,
    },
    {
      toughness: 20,
      challengeRating: 2,
      cards: 2,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 20,
      challengeRating: 2,
      cards: 2,
      testType: TestType.TEST,
    },
    {
      toughness: 25,
      challengeRating: 3,
      cards: 3,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 30,
      challengeRating: 3,
      cards: 3,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 25,
      challengeRating: 3,
      cards: 3,
      testType: TestType.TEST,
    },
    {
      toughness: 35,
      challengeRating: 4,
      cards: 4,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 40,
      challengeRating: 4,
      cards: 4,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 45,
      challengeRating: 5,
      cards: 5,
      testType: TestType.CONFRONTATION,
    },
    {
      toughness: 50,
      challengeRating: 5,
      cards: 5,
      testType: TestType.CONFRONTATION,
    },
  ];

  public static convertRating(rating: number) {
    const conversion = this.challengeRatingMapping[rating];
    if (!conversion) {
      throw new Error(`No mapping for rating: ${rating}`);
    }
    return conversion;
  }
}
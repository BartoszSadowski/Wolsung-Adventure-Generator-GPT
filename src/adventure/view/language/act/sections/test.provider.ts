import { SequenceElement } from '../../../../scene/scene';
import { Challenge, Test } from './section';
import { Test as DomainTest } from '../../../../system/test/test';
import { TestType } from '../../../../system/test/test.type';
import { pluralize } from '../../../../../utility/text/pluralize';
import { InflectionProvider } from '../../inflection/inflection.provider';

export class TestProvider {
  private cardPluralize = pluralize('karta', 'karty', 'kart');

  constructor(
    private readonly inflectionProvider: InflectionProvider) {
  }

  async get(sequenceElement: SequenceElement): Promise<Test | undefined> {
    const test = sequenceElement.test;
    if (!test) {
      return;
    }

    return new Test(
      this.getTestType(test),
      await this.getResult(test),
      await this.getConsequence(test),
      this.getChallenge(test),
      this.getAces(test),
      this.getDangers(test),
      this.getChances(test),
      this.getAbilities(test),
      this.getModifiers(test),
    );
  }

  getChallengeCards(cardNumber: number) {
    return `${cardNumber} ${this.cardPluralize(cardNumber)}`;
  }

  async getResult(test: DomainTest) {
    return this.inflectionProvider.correct(test.result);
  }

  async getConsequence(test: DomainTest) {
    return this.inflectionProvider.correct(test.consequence);
  }

  private getTestType(test: DomainTest): TestType {
    return test.testType;
  }

  private getChallenge({ challengeRating, toughness, cards }: DomainTest): Challenge {
    return {
      challengeRating,
      toughness,
      cards: this.getChallengeCards(cards),
    };
  }

  private getAces(test: DomainTest) {
    return test.aces.join(', ');
  }

  private getDangers(test: DomainTest) {
    return test.dangers;
  }

  private getChances(test: DomainTest) {
    return test.chances;
  }

  private getAbilities(test: DomainTest) {
    return test.abilities;
  }

  private getModifiers(test: DomainTest) {
    return test.modifiers.join(' ');
  }
}
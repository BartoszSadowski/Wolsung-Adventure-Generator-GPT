import { TestProvider } from '../../../../scene/test.provider';
import { Test } from '../../../../system/test/test';
import { getRandomIntInRange } from '../../../../../utility/random/number.utils';
import { CardEffect } from '../../../../system/cards/card';
import { getRandomElement } from '../../../../../utility/random/list.utils';
import { Parties } from '../../../../party/parties';
import { StealTestDangersSource } from './steal.test.dangers.source';
import { StealTestChancesSource } from './steal.test.chances.source';
import { dividePossiblyEvenly } from '../../../../../utility/array/partition';
import { Ability } from '../../../../system/ability/ability';
import { AbilitySystem } from '../../../../system/ability/ability.system';

export class StealTestProvider extends TestProvider {
  get(result: string, consequence: string, parties: Parties): Test {
    const security = parties.getGoalParty().securityMeasures || [];
    const dividedSecurity = this.divideSecurityIntoRoles(security);

    return super.getTestBuilder(
      result,
      consequence,
      this.getChallengeRating(),
    )
      .aces(dividedSecurity.aces)
      .chances(this.getChances())
      .dangers(this.getDangers(dividedSecurity.dangers))
      .abilities(this.getAbilities(dividedSecurity.abilities))
      .build();
  }

  private getChallengeRating() {
    return getRandomIntInRange(1, 2);
  }

  private getDangers(security: Array<string>): Array<CardEffect> {
    const dangerSource = new StealTestDangersSource(security);

    const spades = getRandomElement(dangerSource.getSpades());
    const hearts = getRandomElement(dangerSource.getHearts());
    const diamonds = getRandomElement(dangerSource.getDiamonds());
    const clubs = getRandomElement(dangerSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getChances(): Array<CardEffect> {
    const chanceSource = new StealTestChancesSource();

    const spades = getRandomElement(chanceSource.getSpades());
    const hearts = getRandomElement(chanceSource.getHearts());
    const diamonds = getRandomElement(chanceSource.getDiamonds());
    const clubs = getRandomElement(chanceSource.getClubs());

    return [spades, hearts, diamonds, clubs];
  }

  private getAbilities(security: Array<string>): Array<Ability> {
    return security.map((value) => {
      return getRandomElement([
        AbilitySystem.attack(value),
        AbilitySystem.isolation(value),
        AbilitySystem.trouble(value),
      ]);
    });
  }

  private divideSecurityIntoRoles(security: Array<string>) {
    const [aces, abilities, dangers] = dividePossiblyEvenly(security, 3);

    return {
      aces,
      abilities,
      dangers,
    };
  }
}
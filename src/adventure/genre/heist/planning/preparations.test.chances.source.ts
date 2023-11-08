import { CardEffect, Color } from '../../../system/cards/card';
import { Party } from '../../../party/party';
import { AllyProvider } from '../../../system/advantage/ally/ally.provider';
import { ChanceSystem } from '../../../system/cards/chance.system';
import { GoalParty } from '../../../party/goal/goal.party';
import { getRandomElement } from '../../../../random/list.utils';
import { Advantage } from '../../../system/advantage/advantage';

export class PreparationsTestChancesSource {
  private static allyProvider = new AllyProvider();

  private readonly goalParty: GoalParty;

  constructor(private readonly parties: Array<Party>, private readonly advantages: Array<Advantage>) {
    this.goalParty = parties.find(party => party instanceof GoalParty) as unknown as GoalParty;

  }

  public getSpades(): Array<CardEffect> {
    const selectedSecurityMeasure = getRandomElement(this.goalParty.securityMeasures || []);

    return [
      ChanceSystem.information(Color.SPADES, `Informacja o jednym z zabezpieczeń: ${selectedSecurityMeasure}`),
      ChanceSystem.regainAttribute(Color.SPADES, 'Zaimponuj w towarzystwie'),
    ];
  }

  public getHearts(): Array<CardEffect> {
    const ally = PreparationsTestChancesSource.allyProvider.get(this.parties);

    this.advantages.push(ally);

    return [
      ChanceSystem.temporaryAdvantage(Color.HEARTS, `${ally.name} może okazać się pomocny`),
    ];
  }

  public getDiamonds(): Array<CardEffect> {
    return [
      ChanceSystem.regainAttribute(Color.DIAMONDS, 'Promocja'),
      ChanceSystem.regenerateAttribute(Color.DIAMONDS, 'Wygrana w trzy karty'),
      ChanceSystem.healWound(Color.DIAMONDS, 'Odnaleziony zaginiony przedmiot - znaleźne'),
    ];
  }

  public getClubs(): Array<CardEffect> {
    return [
      ChanceSystem.lead(Color.DIAMONDS, 'Nexus w centrum parku'),
      ChanceSystem.regainAttribute(Color.DIAMONDS, 'Magiczne ciateczko'),
    ];
  }
}
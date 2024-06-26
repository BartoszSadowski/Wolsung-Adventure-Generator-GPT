import { CardEffect, Color } from '../../../system/cards/card';
import { AllyProvider } from '../../../system/advantage/ally/ally.provider';
import { ChanceSystem } from '../../../system/cards/chance.system';
import { GoalParty } from '../../../party/goal/goal.party';
import { getRandomElement } from '../../../../utility/random/list.utils';
import { Advantage } from '../../../system/advantage/advantage';
import { HeistAllyTemplateSource } from '../heist.allyTemplate.source';
import { Parties } from '../../../party/parties';
import { CardSource } from '../../../scene/card.source';


export class PreparationsTestChancesSource implements CardSource {
  private static allyProvider = new AllyProvider();


  private readonly goalParty: GoalParty;

  constructor(private readonly parties: Parties, private readonly advantages: Array<Advantage>) {
    this.goalParty = parties.getGoalParty();

  }

  public getSpades(): Array<CardEffect> {
    const selectedSecurityMeasure = getRandomElement(this.goalParty.securityMeasures || []);

    return [
      ChanceSystem.lead(Color.SPADES, `Informacja o jednym z zabezpieczeń: ${selectedSecurityMeasure}`),
      ChanceSystem.regainAttribute(Color.SPADES, 'Zaimponuj w towarzystwie'),
    ];
  }

  public getHearts(): Array<CardEffect> {
    const template = getRandomElement(HeistAllyTemplateSource.templates);

    const ally = PreparationsTestChancesSource.allyProvider.get(
      this.parties,
      template.description,
      template.traits,
    );

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
      ChanceSystem.regenerateAttribute(Color.CLUBS, 'Nexus w centrum parku'),
      ChanceSystem.regainAttribute(Color.CLUBS, 'Magiczne ciateczko'),
    ];
  }
}
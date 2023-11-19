import { Parties } from '../../../../party/parties';
import { SequenceElement } from '../../../../scene/scene';
import { StealTestProvider } from './steal.test.provider';
import { PartyType, partyTypeTranslations } from '../../../../party/partyType';

export class StealSequenceProvider {
  private readonly stealTestProvider = new StealTestProvider();

  get(parties: Parties): SequenceElement {
    const treasure = parties.getGoalParty().name;
    if (!treasure) {
      throw new Error('Treasure not defined');
    }

    const test = this.stealTestProvider.get(
      `${treasure} zostaje wykradziony`,
      'Drużyna musi obejść się smakiem',
    );

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT(treasure),
      test,
    };
  }

  private readonly WHAT = (treasure: string) => `Wykrada ${treasure}`;
}
import { Parties } from '../../../../party/parties';
import { SequenceElement } from '../../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../../party/partyType';
import { BreakInTestProvider } from './breakIn.test.provider';

export class BreakInSequenceProvider {
  private readonly breakInTestProvider = new BreakInTestProvider();

  private readonly WHAT = 'Dostaje się do celu zgodnie z planem';

  get(parties: Parties, where: string): SequenceElement {
    const test = this.breakInTestProvider.get(
      'Drużyna niepostrzeżenie dostaje się do celu',
      'Zwiększenie poziomu napięcia o 1',
      parties,
      where,
    );

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT,
      test,
    };
  }
}
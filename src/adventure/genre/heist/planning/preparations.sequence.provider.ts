import { SequenceElement } from '../../../scene/scene';
import { PreparationsTestProvider } from './preparations.test.provider';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { Advantage } from '../../../system/advantage/advantage';
import { Parties } from '../../../party/parties';

export class PreparationsSequenceProvider {

  private readonly preparationsTestProvider = new PreparationsTestProvider();

  private readonly WHAT = 'Przygotowuje się do akcji.';

  get(parties: Parties, advantages: Advantage[]): SequenceElement {
    const test = this.preparationsTestProvider.get(
      'Obniżenie poziomu trudności skoku o jeden poziom wyzwania',
      'Zwiększenie poziomu napięcia o 1',
      parties,
      advantages,
    );

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT,
      test,
    };
  }
}

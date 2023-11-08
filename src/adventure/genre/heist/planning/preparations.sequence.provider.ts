import { Party } from '../../../party/party';
import { SequenceElement } from '../../../scene/scene';
import { PreparationsTestProvider } from './preparations.test.provider';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { Advantage } from '../../../system/advantage/advantage';

export class PreparationsSequenceProvider {

  private readonly preparationsTestProvider = new PreparationsTestProvider();

  private readonly WHAT = 'Przygotowuje się do akcji.';

  get(parties: Party[], advantages: Advantage[]): SequenceElement {
    const test = this.preparationsTestProvider.get(
      'Obniżenie poziomu trudności skoku o jeden poziom wyzwania',
      'Zwiększenie poziomu napięcia o 1',
      parties,
      advantages,
    );

    // TODO
    // Zagrożenia utrudniające kradzierz

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT,
      test,
    };
  }
}

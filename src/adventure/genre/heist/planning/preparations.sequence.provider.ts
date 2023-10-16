import { Party } from '../../../party/party';
import { SequenceElement } from '../../../scene/scene';
import { PreparationsTestProvider } from './preparations.test.provider';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';

export class PreparationsSequenceProvider {

  private readonly preparationsTestProvider = new PreparationsTestProvider();

  private readonly WHAT = 'Przygotowuje się do akcji.';

  get(parties: Party[]): SequenceElement {
    const test = this.preparationsTestProvider.get(
      'Obniżenie poziomu trudności skoku o jeden poziom wyzwania',
      'Zwiększenie poziomu napięcia o 1',
    );

    // TODO
    // Zagrożenia bazujące na tym co chce się ukraść
    // Szanse przewidziane konkretne zabezpieczenia / NPC pomocnicy dający jednorazowo odpowiednie bonusy

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT,
      test,
    };
  }
}

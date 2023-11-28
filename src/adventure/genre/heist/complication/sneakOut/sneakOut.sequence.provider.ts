import { SequenceElement } from '../../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../../party/partyType';
import { SneakOutTestProvider } from './sneakOut.test.provider';

export class SneakOutSequenceProvider {
  private readonly sneakOutTestProvider = new SneakOutTestProvider();

  get(where: string): SequenceElement {
    const test = this.sneakOutTestProvider.get(
      'Bezpieczne opuszczenie miejsca zdarzenia',
      'Wykrycie: Rozpoczyna się pościg',
      where,
    );

    return {
      conditional: 'Jedynie jeśli poziom napięcia jest mniejszy lub równy 2',
      who: partyTypeTranslations[PartyType.TEAM],
      what: 'Wymyka się niepostrzeżenie',
      test,
    };
  }
}


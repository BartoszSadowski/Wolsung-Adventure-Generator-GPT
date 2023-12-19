import { Parties } from '../../../../party/parties';
import { SequenceElement } from '../../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../../party/partyType';
import { BreakInTestProvider } from './breakIn.test.provider';
import { PlaceOfAction } from '../../../../scene/placeOfAction';

export class BreakInSequenceProvider {
  private readonly breakInTestProvider = new BreakInTestProvider();

  private readonly WHAT = 'Dostaje się do celu zgodnie z planem';

  get(parties: Parties, placeOfAction: PlaceOfAction): SequenceElement {
    const test = this.breakInTestProvider.get(
      'Drużyna niepostrzeżenie dostaje się do celu',
      'Zwiększenie poziomu napięcia o 1',
      parties,
      placeOfAction,
    );

    return {
      who: partyTypeTranslations[PartyType.TEAM],
      what: this.WHAT,
      test,
    };
  }
}
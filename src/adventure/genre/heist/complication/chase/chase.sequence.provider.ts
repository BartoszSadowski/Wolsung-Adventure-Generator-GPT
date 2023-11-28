import { SequenceElement } from '../../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../../party/partyType';
import { ChaseTestProvider } from './chase.test.provider';
import { Parties } from '../../../../party/parties';

export class ChaseSequenceProvider {
  private readonly chaseTestProvider = new ChaseTestProvider();

  get(parties: Parties): SequenceElement {
    const test = this.chaseTestProvider.get(
      'Postaci Graczy pozostają wolne',
      `Postaci Graczy zostają złapane. Jeśli udało się wykraść ${(parties.getGoalParty().name)} to zostaje stracony.`,
    );

    return {
      conditional: 'Jeśli z jakiegokolwiek powodu drużynie nie udało się wymknąć',
      who: partyTypeTranslations[PartyType.TEAM],
      what: 'Próbuje uciec w bezpieczne miejsce',
      test,
    };
  }
}


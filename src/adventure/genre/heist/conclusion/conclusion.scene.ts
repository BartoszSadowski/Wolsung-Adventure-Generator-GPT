import { Scene } from '../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { Parties } from '../../../party/parties';

export class ConclusionScene extends Scene {
  constructor(parties: Parties) {
    super(parties);
    this.addGoal(PartyType.GM, 'Wyciszyć graczy, dać nacieszyć się zwycięstwem');
    this.where = 'Gdzieś w zacisznym miejscu';
    this.prepareSequence();
  }

  private prepareSequence() {
    const treasure = this.parties.getGoalParty().name;

    this.sequence.push({
      conditional: `Jeśli udało się zdobyć ${treasure}`,
      who: partyTypeTranslations[PartyType.TEAM],
      what: 'Analizuje zdobyty skarb. Zastanawia się co mogło pójść lepiej.',
    });

    this.sequence.push({
      conditional: `Jeśli nie udało się zdobyć ${treasure}`,
      who: partyTypeTranslations[PartyType.TEAM],
      what: 'Zzastanawia się co dalej. Czy spróbują jeszcze raz, czy zajmą się czym innym?',
    });
  }
}

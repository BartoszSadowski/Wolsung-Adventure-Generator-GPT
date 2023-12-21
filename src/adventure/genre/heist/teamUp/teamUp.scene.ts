import { Scene } from '../../../scene/scene';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { LearnAboutGoalSequenceProvider } from './learnAboutGoal.sequence.provider';
import { Parties } from '../../../party/parties';
import { LearnGoalWrapper } from './learnGoal.wrapper';

export class TeamUpScene extends Scene {
  private readonly learnAboutProvider = new LearnAboutGoalSequenceProvider();

  constructor(parties: Parties) {
    super(parties);
    this.addGoals();
    this.prepareSequence();
    this.prepareWhere();
  }

  private prepareWhere() {
    const location = this.locationBuilder.getLocation();
    const { country, city } = this.parties.getPlaceOfAction();

    this.placeOfAction.name = location;
    this.placeOfAction.city = city;
    this.placeOfAction.country = country;
  }

  private addGoals() {
    this.addGoal(PartyType.GM, 'Przedstawić drużynie cel skoku');
    this.addGoal(PartyType.TEAM, 'Przedstawić się przed współgraczami');
  }

  private prepareSequence() {
    const learnAboutGoalStep = new LearnGoalWrapper(this.parties).wrap(
      this.learnAboutProvider.get(this.parties, this.locationBuilder),
    );

    this.sequence.push(learnAboutGoalStep);
    this.sequence.push({
      who: partyTypeTranslations[PartyType.GM],
      what: 'Przedstawia startowy poziom napięcia: 1',
    });
  }
}
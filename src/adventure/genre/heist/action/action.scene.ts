import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Parties } from '../../../party/parties';
import { BreakInSequenceProvider } from './breakin/breakIn.sequence.provider';
import { StealSequenceProvider } from './steal/steal.sequence.provider';

export class ActionScene extends Scene {
  private readonly breakInSequenceProvider = new BreakInSequenceProvider();

  private readonly stealSequenceProvider = new StealSequenceProvider();


  constructor(parties: Parties) {
    super(parties);
    this.addGoals();
    this.prepareWhere();
    this.prepareSequence();
  }

  private addGoals() {
    const treasure = this.parties.getGoalParty();

    this.addGoal(PartyType.GM, 'Pozwolić drużynie poczuć cel w garści');
    this.addGoal(PartyType.TEAM, `Wykraść ${treasure.name}`);
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }

  private prepareWhere() {
    const locationTags: Array<string> = this.parties.getGoalParty().properties.location || [];
    locationTags.forEach(tag => this.locationBuilder.addTag(tag));

    this.placeOfAction.name = this.locationBuilder.getLocation();
  }

  private prepareSequence() {
    this.sequence.push(this.breakInSequenceProvider.get(this.parties, this.placeOfAction));
    this.sequence.push(this.stealSequenceProvider.get(this.parties));
  }
}
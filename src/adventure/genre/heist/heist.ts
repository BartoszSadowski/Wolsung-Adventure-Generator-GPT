import { Adventure } from '../../adventure';
import { Genre } from '../genre';
import { TeamUpScene } from './teamUp/teamUp.scene';
import { PlanningScene } from './planning/planning.scene';
import { ActionScene } from './action/action.scene';
import { ComplicationScene } from './complication/complication.scene';
import { ConclusionScene } from './conclusion/conclusion.scene';
import { GoalParty } from '../../party/goal/goal.party';
import { ModifierProvider } from './modifier.provider';
import { LocationParty } from '../../party/location/location.party';
import { PartyType } from '../../party/partyType';
import { relationType } from '../../party/relation';
import { PlaceOfActionProvider } from '../../party/placeOfAction/placeOfAction.provider';

export class Heist extends Genre {
  private readonly modifierProvider = new ModifierProvider();

  private readonly placeOfActionProvider = new PlaceOfActionProvider();

  getStructure(): Adventure {
    this.setUpParties();
    this.addModifiers();

    return this.getAdventure();
  }

  private getAdventure() {
    const adventure = new Adventure();
    adventure.act1 = new TeamUpScene(this.parties);
    adventure.act2 = new PlanningScene(this.parties);
    adventure.act3 = new ActionScene(this.parties);
    adventure.act4 = new ComplicationScene(this.parties);
    adventure.act5 = new ConclusionScene(this.parties);

    return adventure;
  }

  private addModifiers() {
    this.modifierProvider.get(this.parties);
  }

  private setUpParties() {
    this.parties.push(new GoalParty('treasure'));

    this.parties.push(this.placeOfActionProvider.get());

    const location = new LocationParty('treasure location');
    location.relations.push({
      target: PartyType.GOAL,
      type: relationType.LOCATION.CONTAINS,
    });
    location.relations.push({
      target: PartyType.PLACE_OF_ACTION,
      type: relationType.LOCATION.IN,
    });
    this.parties.push(location);

  }

}
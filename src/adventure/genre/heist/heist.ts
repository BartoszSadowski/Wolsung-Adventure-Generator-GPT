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

export class Heist extends Genre {
  private readonly modifierProvider = new ModifierProvider();

  getStructure(): Adventure {
    this.addTreasureParty();
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

  private addTreasureParty() {
    this.parties.push(new GoalParty('treasure'));
    const location = new LocationParty('treasure location');
    location.relations.push({
      target: PartyType.GOAL,
      type: relationType.LOCATION.CONTAINS,
    });
    this.parties.push(location);
  }

  private addModifiers() {
    this.modifierProvider.get(this.parties);
  }
}
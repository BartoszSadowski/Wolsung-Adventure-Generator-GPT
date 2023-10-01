import { Adventure } from '../../adventure';
import { Genre } from '../genre';
import { TeamUpScene } from './teamUp/teamUp.scene';
import { PlanningScene } from './planning/planning.scene';
import { ActionScene } from './action/action.scene';
import { ComplicationScene } from './complication/complication.scene';
import { ConclusionScene } from './conclusion/conclusion.scene';
import { GoalParty } from '../../party/goal/goal.party';
import { ModifierProvider } from './modifier.provider';

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
    const treasure = new GoalParty('treasure', 'name');
    this.parties.push(treasure);
  }

  private addModifiers() {
    this.modifierProvider.get(this.parties);
  }
}
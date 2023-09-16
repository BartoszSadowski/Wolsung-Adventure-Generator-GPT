import { Adventure } from '../../adventure';
import { Genre } from '../genre';
import { TeamUpScene } from './teamUp.scene';
import { PlanningScene } from './planning.scene';
import { ActionScene } from './action.scene';
import { ComplicationScene } from './complication.scene';
import { ConclusionScene } from './conclusion.scene';
import { GoalParty } from '../../party/goal.party';

export class Heist extends Genre {
  private addTreasureParty() {
    const treasure = new GoalParty('treasure', 'name');
    this.parties.push(treasure);
  }

  getStructure(): Adventure {
    this.addTreasureParty();
 
    const adventure = new Adventure();
    adventure.act1 = new TeamUpScene();
    adventure.act2 = new PlanningScene();
    adventure.act3 = new ActionScene();
    adventure.act4 = new ComplicationScene();
    adventure.act5 = new ConclusionScene();

    return adventure;
  }
}
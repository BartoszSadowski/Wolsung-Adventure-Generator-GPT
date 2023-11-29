import { Adventure } from '../../../adventure';
import { Act } from './act';
import { ActTitleProvider } from './title/act.title.provider';
import { Scene } from '../../../scene/scene';
import { GoalsProvider } from './goal/goals.provider';

export class ActsProvider {

  constructor(
    private actTitleProvider: ActTitleProvider,
    private goalProvider: GoalsProvider,
  ) {
  }

  get(adventure: Adventure): Array<Act> {
    return Object.entries(adventure)
      .map(([key, scene]: [string, Scene]) => new Act(
        this.actTitleProvider.get(key, scene),
        this.goalProvider.get(scene),
      ));
  }
}
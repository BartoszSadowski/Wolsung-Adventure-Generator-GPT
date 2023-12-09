import { Adventure } from '../../../adventure';
import { Act } from './act';
import { ActTitleProvider } from './title/act.title.provider';
import { GoalsProvider } from './goal/goals.provider';

export class ActsProvider {

  constructor(
    private actTitleProvider: ActTitleProvider,
    private goalProvider: GoalsProvider,
  ) {
  }

  get(adventure: Adventure): Promise<Array<Act>> {
    return Promise.all(Object.entries(adventure)
      .map(async ([key, scene]) => new Act(
        this.actTitleProvider.get(key, scene),
        await this.goalProvider.get(scene),
      )));
  }
}
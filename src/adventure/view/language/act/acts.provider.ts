import { Adventure } from '../../../adventure';
import { Act } from './act';
import { ActTitleProvider } from './title/act.title.provider';
import { GoalsProvider } from './goal/goals.provider';
import { SectionsProvider } from './sections/sections.provider';
import { AdvantageProvider } from './advantage/advantage.provider';

export class ActsProvider {
  constructor(
    private readonly actTitleProvider: ActTitleProvider,
    private readonly goalProvider: GoalsProvider,
    private readonly sectionsProvider: SectionsProvider,
    private readonly advantagesProvider: AdvantageProvider,
  ) {
  }

  get(adventure: Adventure): Promise<Array<Act>> {
    return Promise.all(Object.entries(adventure)
      .map(async ([key, scene]) => new Act(
        await this.actTitleProvider.get(key, scene),
        await this.goalProvider.get(scene),
        await this.sectionsProvider.get(scene),
        await this.advantagesProvider.get(scene),
      )));
  }
}
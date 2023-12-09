import { Goal } from './goal';
import { Scene } from '../../../../scene/scene';
import { getPartyTypeTranslations } from './partyType.translations';
import { InflectionProvider } from '../../inflection/inflection.provider';

export class GoalsProvider {
  constructor(
    private readonly inflecionProvider: InflectionProvider,
  ) {
  }

  get(scene: Scene): Promise<Array<Goal>> {
    return Promise.all(Object.entries(scene.goals)
      .map(async ([key, value]) => new Goal(
        getPartyTypeTranslations(key),
        await this.inflecionProvider.correct(value.toLowerCase()),
      )));
  }
}
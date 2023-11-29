import { Goal } from './goal';
import { Scene } from '../../../../scene/scene';
import { getPartyTypeTranslations } from './partyType.translations';
import { InflectionProvider } from '../../inflection/inflection.provider';

export class GoalsProvider {
  constructor(
    private readonly inflecionProvider: InflectionProvider,
  ) {
  }

  get(scene: Scene): Array<Goal> {
    return Object.entries(scene.goals)
      .map(([key, value]: [string, string]) => new Goal(
        getPartyTypeTranslations(key),
        this.inflecionProvider.correct(value.toLowerCase()),
      ));
  }
}
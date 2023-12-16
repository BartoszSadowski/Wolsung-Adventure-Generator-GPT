import { Goal } from './goal/goal';
import { AdvantageView } from './advantage/advantage.view';
import { Section } from './sections/section';

export class Act {
  constructor(
    private readonly title: string,
    private readonly goals: Array<Goal>,
    private readonly sections: Array<Section>,
    private readonly advantages: Array<AdvantageView>,
  ) {
  }
}

import { Goal } from './goal/goal';
import { AdvantageView } from './advantage/advantage.view';

export class Act {
  constructor(
    private readonly title: string,
    private readonly goals: Array<Goal>,
    private readonly sections: Array<string>,
    private readonly advantages: Array<AdvantageView>,
  ) {
  }
}

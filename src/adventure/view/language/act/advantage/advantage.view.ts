import { Trait } from '../../../../system/advantage/trait/trait';

export class AdvantageView {
  constructor(
    private readonly description: string,
    private readonly traits: Array<Trait>,
  ) {
  }
}
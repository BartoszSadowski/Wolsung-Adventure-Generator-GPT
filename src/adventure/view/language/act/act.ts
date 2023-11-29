import { Goal } from './goal/goal';

export class Act {
  constructor(
    private readonly title: string,
    private readonly goals: Array<Goal>,
  ) {
  }
}

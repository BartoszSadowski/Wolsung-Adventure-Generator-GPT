import { PartyType } from '../party/partyType';
import { Party } from '../party/party';

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  where = '';

  initialConditions = '';

  result = '';

  problems = [];

  constructor(protected readonly parties: Array<Party> = []) {
  }

  toJson() {
    return {
      goals: this.goals,
      where: this.where,
      initialConditions: this.initialConditions,
      result: this.result,
      problems: this.problems,
    };
  }

  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }
}

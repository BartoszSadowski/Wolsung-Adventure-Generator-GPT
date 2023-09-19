import { PartyType } from '../party/partyType';
import { Party } from '../party/party';

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  where = '';

  what = '';

  problems = [];

  possibilities = [];

  constructor(protected readonly parties: Array<Party> = []) {
  }

  toJson() {
    return {
      goals: this.goals,
      where: this.where,
      what: this.what,
      problems: this.problems,
      possibilities: this.possibilities,
    };
  }

  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }
}

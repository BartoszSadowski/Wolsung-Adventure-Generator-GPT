import { PartyType } from '../party/partyType';

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  where = '';

  initialConditions = '';

  result = '';

  problems = [];


  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }

}

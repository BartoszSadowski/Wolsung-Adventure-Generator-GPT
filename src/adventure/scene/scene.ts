import { PartyType } from '../party/partyType';
import { Party } from '../party/party';
import { LocationBuilder } from '../location/locationBuilder';
import { Test } from '../system/test/test';
import { Advantage } from '../system/advantage/advantage';


export interface SequenceElement {
  who?: string;
  what?: string;
  with?: string;
  test?: Test;
}

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  locationBuilder = new LocationBuilder();

  where = '';

  sequence: Array<SequenceElement> = [];

  advantages: Array<Advantage> = [];

  constructor(protected readonly parties: Array<Party> = []) {
  }

  toJson() {
    return {
      goals: this.goals,
      where: this.where,
      what: this.sequence,
      advantages: this.advantages,
    };
  }

  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }
}

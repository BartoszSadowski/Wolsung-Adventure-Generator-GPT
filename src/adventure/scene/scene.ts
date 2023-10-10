import { PartyType } from '../party/partyType';
import { Party } from '../party/party';
import { LocationBuilder } from '../location/locationBuilder';

export interface SequenceElement {
  who?: string;
  what?: string;
  with?: string;
  problems?: Array<string>;
  possibilities?: Array<string>;
}

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  locationBuilder = new LocationBuilder();

  where = '';

  sequence: Array<SequenceElement> = [];

  constructor(protected readonly parties: Array<Party> = []) {
  }

  toJson() {
    return {
      goals: this.goals,
      where: this.where,
      what: this.sequence,
    };
  }

  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }
}

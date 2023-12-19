import { PartyType } from '../party/partyType';
import { LocationBuilder } from '../location/locationBuilder';
import { Test } from '../system/test/test';
import { Advantage } from '../system/advantage/advantage';
import { Parties } from '../party/parties';
import { PlaceOfAction } from './placeOfAction';


export interface SequenceElement {
  conditional?: string;
  who?: string;
  what?: string;
  with?: string;
  test?: Test;
}

export class Scene {
  goals: Partial<Record<PartyType, string>> = {};

  locationBuilder = new LocationBuilder();

  placeOfAction = new PlaceOfAction();

  sequence: Array<SequenceElement> = [];

  advantages: Array<Advantage> = [];

  constructor(protected readonly parties: Parties = new Parties([])) {
  }

  toJson() {
    return {
      goals: this.goals,
      where: this.placeOfAction,
      what: this.sequence,
      advantages: this.advantages,
    };
  }

  protected addGoal(key: PartyType, value: string) {
    this.goals[key] = value;
  }
}

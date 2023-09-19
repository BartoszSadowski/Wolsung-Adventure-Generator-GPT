import { PartyType } from './partyType';

export class Relation {
  constructor(
    public readonly target: PartyType,
    public readonly type: string,
    public readonly value?: string,
  ) {
  }
}

export const RelationType = {
  PEOPLE: {
    RELATIVE: 'relative',
    NEMESIS: 'nemesis',
  },
};
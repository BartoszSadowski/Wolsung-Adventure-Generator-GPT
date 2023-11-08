import { PartyType } from './partyType';

export class Relation {
  constructor(
    public readonly target: PartyType,
    public readonly type: string,
    public readonly value?: string,
  ) {
  }
}

export const relationType = {
  PEOPLE: {
    RELATIVE: 'relative',
    NEMESIS: 'nemesis',
  },
  LOCATION: {
    CONTAINS: 'contains',
    IN: 'in',
    OWNED: 'owned',
  },
};
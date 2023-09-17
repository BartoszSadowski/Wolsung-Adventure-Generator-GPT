import { PartyType } from './partyType';

export abstract class Party {
  abstract partyType: PartyType;

  readonly tags: Array<string> = [];
}
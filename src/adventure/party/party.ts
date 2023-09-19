import { PartyType } from './partyType';
import { Relation } from './relation';

export abstract class Party {
  abstract partyType: PartyType;

  readonly tags: Array<string> = [];

  readonly relations: Array<Relation> = [];
}
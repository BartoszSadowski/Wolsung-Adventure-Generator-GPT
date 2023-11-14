import { PartyType } from './partyType';
import { Relation } from './relation';

export abstract class Party {
  abstract partyType: PartyType;

  readonly tags: Array<string> = [];

  readonly relations: Array<Relation> = [];

  readonly properties: Record<string, Array<string>> = {};

  addPropertyTag(key: string, tag: string) {
    const val = this.properties[key];

    if (!val) {
      this.properties[key] = [tag];
    } else {
      val.push(tag);
    }
  }
}
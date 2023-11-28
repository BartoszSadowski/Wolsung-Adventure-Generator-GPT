import { PartyType } from '../party/partyType';
import { Party } from '../party/party';
import { getRandomElement } from '../../utility/random/list.utils';
import { Relation } from '../party/relation';
import { isFalse } from '../../utility/random/probability.utils';
import { LocationBuilder } from '../location/locationBuilder';
import { Tag } from '../common/tag';
import { Parties } from '../party/parties';

export interface AffectedParty {
  type: PartyType;
  tag?: string;
  relation?: Relation;
  probability: number;
  callback?: () => void;
  propertyTags?: Record<string, Array<string>>;
}

export interface AffectingLocation {
  tag: Tag,
  probability: number;
}

export interface Providee<T> {
  value: T;
  partiesAffected: Array<AffectedParty>,
  affectsLocation?: Array<AffectingLocation>
}

export abstract class ScenePartProvider<T> {
  protected providees: Array<Providee<T>> = [];

  get(parties: Parties, locationBuilder?: LocationBuilder) {
    const providee = getRandomElement(this.providees);

    this.handlePartiesAffected(providee, parties);
    this.handleAffectingLocation(providee, locationBuilder);

    return providee.value;
  }

  private handleAffectingLocation(providee: Providee<T>, locationBuilder?: LocationBuilder) {
    if (!locationBuilder) {
      return;
    }

    providee.affectsLocation?.forEach((affectingLocation) => {
      if (isFalse(affectingLocation.probability)) {
        return;
      }

      locationBuilder.addTag(affectingLocation.tag);
    });
  }

  private handlePartiesAffected(providee: Providee<T>, parties: Parties) {
    providee.partiesAffected.forEach(partyAffected => {
      if (isFalse(partyAffected.probability)) {
        return;
      }

      const party = parties.getParty(partyAffected.type);
      if (!party) {
        return;
      }

      this.addTag(party, partyAffected.tag);
      this.addPropertyTags(party, partyAffected.propertyTags);
      this.addRelation(party, parties, partyAffected.relation);

      partyAffected.callback?.();
    });
  }

  private addTag(party: Party, tag?: string) {
    if (!tag) {
      return;
    }

    party.tags.push(tag);
  }

  private addRelation(party: Party, parties: Parties, relation?: Relation) {
    if (!relation) {
      return;
    }
    if (!parties.has(relation.target)) {
      return;
    }

    party.relations.push(relation);
  }

  private addPropertyTags(party: Party, propertyTags: Record<string, Array<string>> | undefined) {
    if (!propertyTags) {
      return;
    }

    Object.entries(propertyTags).forEach(([key, tags]) => {
      tags.forEach(tag => {
        party.addPropertyTag(key, tag);
      });
    });
  }
}
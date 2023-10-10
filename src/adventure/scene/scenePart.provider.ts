import { PartyType } from '../party/partyType';
import { Party } from '../party/party';
import { getRandomElement } from '../../random/list.utils';
import { Relation } from '../party/relation';
import { isFalse } from '../../random/probability.utils';
import { LocationBuilder } from '../location/locationBuilder';
import { Tag } from '../../common/tag';

export interface AffectedParty {
  type: PartyType;
  tag?: string;
  relation?: Relation;
  probability: number;
  callback?: () => void;
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

  get(parties: Array<Party>, locationBuilder?: LocationBuilder) {
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

  private handlePartiesAffected(providee: Providee<T>, parties: Array<Party>) {
    providee.partiesAffected.forEach(partyAffected => {
      parties.some(party => {
        if (
          party.partyType !== partyAffected.type
          || isFalse(partyAffected.probability)
        ) {
          return false;
        }

        this.addTag(party, partyAffected.tag);
        this.addRelation(party, parties, partyAffected.relation);

        partyAffected.callback?.();

        return true;
      });
    });
  }

  private addTag(party: Party, tag?: string) {
    if (!tag) {
      return;
    }

    party.tags.push(tag);
  }

  private addRelation(party: Party, parties: Array<Party>, relation?: Relation) {
    if (!relation) {
      return;
    }

    const isTargetPartyPresent = parties.some(p => p.partyType == relation.target);
    if (!isTargetPartyPresent) {
      return;
    }

    party.relations.push(relation);
  }
}
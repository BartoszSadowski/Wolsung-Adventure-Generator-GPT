import { PartyType } from '../party/partyType';
import { Party } from '../party/party';
import { getRandomElement } from '../../random/list.utils';
import { Relation } from '../party/relation';

export interface AffectedParty {
  type: PartyType;
  tag?: string;
  relation?: Relation;
}

export interface Providee {
  value: string;
  partiesAffected: Array<AffectedParty>
}

export abstract class ScenePartProvider {
  protected abstract providees: Array<Providee>;

  get(parties: Array<Party>) {
    const providee = getRandomElement(this.providees);
    providee.partiesAffected.forEach(partyAffected => {
      parties.some(party => {
        if (party.partyType !== partyAffected.type) {
          return false;
        }

        this.addTag(party, partyAffected.tag);
        this.addRelation(party, parties, partyAffected.relation);

        return true;
      });
    });
    return providee.value;
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
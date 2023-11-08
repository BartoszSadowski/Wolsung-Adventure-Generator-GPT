import { PartyType } from '../../party/partyType';
import { teamTags } from '../../party/team/teamTags';
import { relationType } from '../../party/relation';

export class ModifierSource {
  public static get() {
    return [
      {
        value: '-',
        partiesAffected: [],
      },
      {
        value: 'Drużyna poszukiwana',
        partiesAffected: [
          {
            type: PartyType.TEAM,
            tag: teamTags.WANTED,
            probability: 1,
          },
        ],
      },
      {
        value: 'Przeciwnikiem jest ktoś bliski',
        partiesAffected: [
          {
            type: PartyType.TEAM,
            tag: relationType.PEOPLE.RELATIVE,
            relation: {
              target: PartyType.ANTAGONIST,
              type: relationType.PEOPLE.RELATIVE,
            },
            probability: 1,
          },
        ],
      },
      {
        value: 'Cel jest nemesis postaci',
        partiesAffected: [
          {
            type: PartyType.TEAM,
            relation: {
              target: PartyType.ANTAGONIST,
              type: relationType.PEOPLE.NEMESIS,
            },
            probability: 1,
          },
        ],
      },
    ];
  }
}
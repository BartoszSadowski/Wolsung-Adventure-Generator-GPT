import { PartyType } from '../../party/partyType';
import { teamTags } from '../../party/team/teamTags';
import { ScenePartProvider } from '../../scene/scenePart.provider';
import { RelationType } from '../../party/relation';

export class ModifierProvider extends ScenePartProvider<string> {
  providees = [
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
          relation: {
            target: PartyType.ANTAGONIST,
            type: RelationType.PEOPLE.RELATIVE,
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
            type: RelationType.PEOPLE.NEMESIS,
          },
          probability: 1,
        },
      ],
    },
  ];
}

import { PartyType } from '../../party/partyType';
import { TeamTags } from '../../party/team/teamTags';
import { ScenePartProvider } from '../../scene/scenePart.provider';
import { RelationType } from '../../party/relation';

export class ModifierProvider extends ScenePartProvider {
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
          tag: TeamTags.WANTED,
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
        },
      ],
    },
  ];
}

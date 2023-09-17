import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';
import { getRandomElement } from '../../../../random/list.utils';

export class InitialConditionsProvider {

  initialConditions = [
    {
      conditions: 'initial condition',
      partiesAffected: [
        {
          type: PartyType.TEAM,
          tag: 'tag',
        },
        {
          type: PartyType.ANTAGONIST,
          tag: 'tag2',
        },
      ],
    },
  ];

  get(parties: Array<Party>) {
    const initialConditions = getRandomElement(this.initialConditions);
    initialConditions.partiesAffected.forEach(partyAffected => {
      parties.some(party => {
        if (party.partyType !== partyAffected.type) {
          return false;
        }

        party.tags.push(partyAffected.tag);
        return true;
      });
    });
    return initialConditions.conditions;
  }
}

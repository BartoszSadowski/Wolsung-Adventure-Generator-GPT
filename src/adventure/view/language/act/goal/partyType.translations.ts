import { PartyType } from '../../../../party/partyType';

export function getPartyTypeTranslations(value: string) {
  switch (value) {
    case PartyType.GM:
      return 'Cel MG';
    case PartyType.ANTAGONIST:
      return 'Cel antagonisty';
    case PartyType.TEAM:
      return 'Cel drużyny';
    default:
      return '?';
  }
}
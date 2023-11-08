export enum PartyType {
  GM = 'GM',
  TEAM = 'team',
  ANTAGONIST = 'antagonist',
  GOAL = 'goal',
  LOCATION = 'location',
  PLACE_OF_ACTION = 'place of action',
}

export const partyTypeTranslations: Record<PartyType, string> = {
  GM: 'mistrz gry',
  antagonist: 'antagonista',
  goal: 'cel',
  team: 'drużyna',
  location: 'miejsce',
  [PartyType.PLACE_OF_ACTION]: 'miejsce akcji',
};

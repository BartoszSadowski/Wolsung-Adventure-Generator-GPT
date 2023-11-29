export enum PartyType {
  GM = 'GM',
  TEAM = 'team',
  ANTAGONIST = 'antagonist',
  GOAL = 'goal',
  PLACE_OF_ACTION = 'place of action',
}

export const partyTypeTranslations: Record<PartyType, string> = {
  GM: 'mistrz gry',
  antagonist: 'antagonista',
  goal: 'cel',
  team: 'drużyna',
  [PartyType.PLACE_OF_ACTION]: 'miejsce akcji',
};


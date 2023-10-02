export enum PartyType {
  GM = 'GM',
  TEAM = 'team',
  ANTAGONIST = 'antagonist',
  GOAL = 'goal',
  LOCATION = 'location',
}

export const partyTypeTranslations: Record<PartyType, string> = {
  GM: 'mistrz gry',
  antagonist: 'antagonista',
  goal: 'cel',
  team: 'drużyna',
  location: 'miejsce',
};

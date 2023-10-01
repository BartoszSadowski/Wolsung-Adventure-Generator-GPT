export enum PartyType {
  GM = 'GM',
  TEAM = 'team',
  ANTAGONIST = 'antagonist',
  GOAL = 'goal',
}

export const partyTypeTranslations: Record<PartyType, string> = {
  GM: 'mistrz gry',
  antagonist: 'antagonista',
  goal: 'cel',
  team: 'drużyna',
};

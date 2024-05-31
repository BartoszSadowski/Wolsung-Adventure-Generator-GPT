export enum LanguageProcessorConfigurationKeys {
  TITLE = 'TITLE',
  ACT_TITLE = 'ACT_TITLE',
  INFLECTION = 'INFLECTION',
  ADVANTAGES = 'ADVANTAGES',
  PLACE_OF_ACTION_DESCRIPTION = 'PLACE_OF_ACTION_DESCRIPTION',
  DESCRIPTION = 'DESCRIPTION',
}

export const languageProcessorConfiguration: Record<LanguageProcessorConfigurationKeys, boolean> = {
  TITLE: true,
  ACT_TITLE: true,
  INFLECTION: true,
  ADVANTAGES: true,
  PLACE_OF_ACTION_DESCRIPTION: true,
  DESCRIPTION: true,
};

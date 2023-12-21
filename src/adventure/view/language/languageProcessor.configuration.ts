export enum LanguageProcessorConfigurationKeys {
  TITLE = 'TITLE',
  ACT_TITLE = 'ACT_TITLE',
  INFLECTION = 'INFLECTION',
  ADVANTAGES = 'ADVANTAGES',
  PLACE_OF_ACTION_DESCRIPTION = 'PLACE_OF_ACTION_DESCRIPTION',
  DESCRIPTION = 'DESCRIPTION',
}

export const languageProcessorConfiguration: Record<LanguageProcessorConfigurationKeys, boolean> = {
  TITLE: false,
  ACT_TITLE: true,
  INFLECTION: false,
  ADVANTAGES: false,
  PLACE_OF_ACTION_DESCRIPTION: false,
  DESCRIPTION: false,
};

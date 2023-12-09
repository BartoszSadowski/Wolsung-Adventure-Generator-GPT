export enum LanguageProcessorConfigurationKeys {
  TITLE = 'TITLE',
  ACT_TITLE = 'ACT_TITLE',
  INFLECTION = 'INFLECTION',
}

export const languageProcessorConfiguration: Record<LanguageProcessorConfigurationKeys, boolean> = {
  TITLE: false,
  ACT_TITLE: false,
  INFLECTION: false,
};

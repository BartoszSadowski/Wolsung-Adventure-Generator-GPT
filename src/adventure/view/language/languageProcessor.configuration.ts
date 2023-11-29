export enum LanguageProcessorConfigurationKeys {
  TITLE = 'TITLE',
  SUMMARY = 'SUMMARY',
  ACT_TITLE = 'ACT_TITLE',
  INFLECTION = 'INFLECTION',
}

export const languageProcessorConfiguration: Record<LanguageProcessorConfigurationKeys, boolean> = {
  TITLE: false,
  SUMMARY: false,
  ACT_TITLE: false,
  INFLECTION: false,
};

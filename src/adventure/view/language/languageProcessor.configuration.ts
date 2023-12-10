export enum LanguageProcessorConfigurationKeys {
  TITLE = 'TITLE',
  ACT_TITLE = 'ACT_TITLE',
  INFLECTION = 'INFLECTION',
  SECTIONS = 'SECTIONS',
  ADVANTAGES = 'ADVANTAGES',
}

export const languageProcessorConfiguration: Record<LanguageProcessorConfigurationKeys, boolean> = {
  TITLE: false,
  ACT_TITLE: false,
  INFLECTION: false,
  SECTIONS: false,
  ADVANTAGES: false,
};

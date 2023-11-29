import { languageProcessorConfiguration, LanguageProcessorConfigurationKeys } from './languageProcessor.configuration';
import { Newable } from '../../../utility/type/newable';
import { MockTitleProvider } from './title/mock.title.provider';
import { GptTitleProvider } from './title/gpt.title.provider';
import { TitleProvider } from './title/title.provider';
import { SummaryProvider } from './summary/summary.provider';
import { GptSummaryProvider } from './summary/gpt.summary.provider';
import { MockSummaryProvider } from './summary/mock.summary.provider';
import { ActsProvider } from './act/acts.provider';
import { ActTitleProvider } from './act/title/act.title.provider';
import { GptActTitleProvider } from './act/title/gpt.act.title.provider';
import { MockActTitleProvider } from './act/title/mock.act.title.provider';
import { InflectionProvider } from './inflection/inflection.provider';
import { GptInflectionProvider } from './inflection/gpt.inflection.provider';
import { MockInflectionProvider } from './inflection/mock.inflection.provider';
import { GoalsProvider } from './act/goal/goals.provider';

export class LanguageProcessorProvider {
  static getTitleProvider() {
    return this.getProvider<TitleProvider>(
      LanguageProcessorConfigurationKeys.TITLE,
      GptTitleProvider,
      MockTitleProvider,
    );
  }

  static getSummaryProvider() {
    return this.getProvider<SummaryProvider>(
      LanguageProcessorConfigurationKeys.SUMMARY,
      GptSummaryProvider,
      MockSummaryProvider,
    );
  }

  static getActsProvider() {
    const goalsProvider = new GoalsProvider(this.getInflectionProvider());

    return new ActsProvider(
      this.getActTitleProvider(),
      goalsProvider,
    );
  }

  static getActTitleProvider() {
    return this.getProvider<ActTitleProvider>(
      LanguageProcessorConfigurationKeys.ACT_TITLE,
      GptActTitleProvider,
      MockActTitleProvider,
    );
  }

  static getInflectionProvider() {
    return this.getProvider<InflectionProvider>(
      LanguageProcessorConfigurationKeys.INFLECTION,
      GptInflectionProvider,
      MockInflectionProvider,
    );
  }

  private static getProvider<T>(type: LanguageProcessorConfigurationKeys, actual: Newable<T>, mock: Newable<T>) {
    if (languageProcessorConfiguration[type]) {
      return new actual();
    }
    return new mock();
  }
}
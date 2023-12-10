import { languageProcessorConfiguration, LanguageProcessorConfigurationKeys } from './languageProcessor.configuration';
import { Newable } from '../../../utility/type/newable';
import { MockTitleProvider } from './title/mock.title.provider';
import { GptTitleProvider } from './title/gpt.title.provider';
import { TitleProvider } from './title/title.provider';
import { ActsProvider } from './act/acts.provider';
import { ActTitleProvider } from './act/title/act.title.provider';
import { GptActTitleProvider } from './act/title/gpt.act.title.provider';
import { MockActTitleProvider } from './act/title/mock.act.title.provider';
import { InflectionProvider } from './inflection/inflection.provider';
import { GptInflectionProvider } from './inflection/gpt.inflection.provider';
import { MockInflectionProvider } from './inflection/mock.inflection.provider';
import { GoalsProvider } from './act/goal/goals.provider';
import { SectionsProvider } from './act/sections/sections.provider';
import { GptSectionsProvider } from './act/sections/gpt.sections.provider';
import { MockSectionsProvider } from './act/sections/mock.sections.provider';
import { AdvantageProvider } from './act/advantage/advantage.provider';
import { GptAdvantageProvider } from './act/advantage/gpt.advantage.provider';
import { MockAdvantageProvider } from './act/advantage/mock.advantage.provider';

export class LanguageProcessorProvider {
  static getTitleProvider() {
    return this.getProvider<TitleProvider>(
      LanguageProcessorConfigurationKeys.TITLE,
      GptTitleProvider,
      MockTitleProvider,
    );
  }

  static getActsProvider() {
    const goalsProvider = new GoalsProvider(this.getInflectionProvider());

    return new ActsProvider(
      this.getActTitleProvider(),
      goalsProvider,
      this.getSectionsProvider(),
      this.getAdvantagesProvider(),
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

  static getSectionsProvider() {
    return this.getProvider<SectionsProvider>(
      LanguageProcessorConfigurationKeys.SECTIONS,
      GptSectionsProvider,
      MockSectionsProvider,
    );
  }

  static getAdvantagesProvider() {
    return this.getProvider<AdvantageProvider>(
      LanguageProcessorConfigurationKeys.ADVANTAGES,
      GptAdvantageProvider,
      MockAdvantageProvider,
    );
  }

  private static getProvider<T>(type: LanguageProcessorConfigurationKeys, actual: Newable<T>, mock: Newable<T>) {
    if (languageProcessorConfiguration[type]) {
      return new actual();
    }
    return new mock();
  }

}
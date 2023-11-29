import { Adventure } from '../adventure';
import { LanguageProcessorProvider } from './language/languageProcessor.provider';
import { Act } from './language/act/act';

export class AdventureView {
  constructor(
    private readonly title: string,
    private readonly summary: string,
    private readonly acts: Array<Act>,
  ) {
  }

  static fromAdventure(adventure: Adventure) {
    return new AdventureView(
      this.getTitle(adventure),
      this.getSummary(adventure),
      this.getActs(adventure),
    );
  }

  private static getTitle(adventure: Adventure) {
    return LanguageProcessorProvider.getTitleProvider().get(adventure);
  }

  private static getSummary(adventure: Adventure) {
    return LanguageProcessorProvider.getSummaryProvider().get(adventure);
  }

  private static getActs(adventure: Adventure) {
    return LanguageProcessorProvider.getActsProvider().get(adventure);
  }
}
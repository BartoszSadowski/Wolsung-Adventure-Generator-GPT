import { Adventure } from '../adventure';
import { LanguageProcessorProvider } from './language/languageProcessor.provider';
import { Act } from './language/act/act';

export class AdventureView {
  constructor(
    private readonly title: string,
    private readonly acts: Array<Act>,
  ) {
  }

  static async fromAdventure(adventure: Adventure) {
    return new AdventureView(
      await this.getTitle(adventure),
      await this.getActs(adventure),
    );
  }

  private static getTitle(adventure: Adventure) {
    return LanguageProcessorProvider.getTitleProvider().get(adventure);
  }

  private static getActs(adventure: Adventure) {
    return LanguageProcessorProvider.getActsProvider().get(adventure);
  }
}
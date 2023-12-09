import { TitleProvider } from './title.provider';
import { GptProvider } from '../gpt/gpt.provider';

export class GptTitleProvider implements TitleProvider {
  get(): Promise<string> {
    // TODO replace me with proper call relating to the adventure
    return GptProvider.getGenerativeGpt()
      .get('Nadaj nazwę przygodzie w stylu heist w steampunkowym świecie');
  }
}
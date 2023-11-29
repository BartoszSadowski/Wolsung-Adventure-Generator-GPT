import { TitleProvider } from './title.provider';

export class GptTitleProvider implements TitleProvider {
  get(): string {
    // TODO replace me with actual call
    return 'GPT generated title';
  }
}
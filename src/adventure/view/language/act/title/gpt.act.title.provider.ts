import { ActTitleProvider } from './act.title.provider';
import { getActTranslation } from './act.translations';

export class GptActTitleProvider implements ActTitleProvider {
  get(key: string): string {
    // TODO replace me with actual call
    return `${getActTranslation(key)}: GPT generated title`;
  }
}
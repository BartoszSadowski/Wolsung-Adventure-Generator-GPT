import { ActTitleProvider } from './act.title.provider';
import { getActTranslation } from './act.translations';

export class MockActTitleProvider implements ActTitleProvider {
  async get(key: string): Promise<string> {
    return getActTranslation(key);
  }
}
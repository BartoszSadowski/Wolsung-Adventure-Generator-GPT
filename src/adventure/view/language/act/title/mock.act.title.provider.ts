import { ActTitleProvider } from './act.title.provider';
import { getActTranslation } from './act.translations';

export class MockActTitleProvider implements ActTitleProvider {
  get(key: string): string {
    return getActTranslation(key);
  }
}
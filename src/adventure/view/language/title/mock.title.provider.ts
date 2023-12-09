import { TitleProvider } from './title.provider';

export class MockTitleProvider implements TitleProvider {
  async get(): Promise<string> {
    return 'Tytuł (model odłączony)';
  }

}
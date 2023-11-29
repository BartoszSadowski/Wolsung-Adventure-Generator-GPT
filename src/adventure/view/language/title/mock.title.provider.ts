import { TitleProvider } from './title.provider';

export class MockTitleProvider implements TitleProvider {
  get(): string {
    return 'Tytuł (model odłączony)';
  }

}
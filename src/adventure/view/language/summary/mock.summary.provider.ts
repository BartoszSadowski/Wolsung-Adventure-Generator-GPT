import { SummaryProvider } from './summary.provider';

export class MockSummaryProvider implements SummaryProvider {
  get(): string {
    return 'Streszczenie (model odłączony)';
  }

}
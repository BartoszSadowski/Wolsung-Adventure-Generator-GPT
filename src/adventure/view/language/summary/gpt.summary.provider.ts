import { SummaryProvider } from './summary.provider';

export class GptSummaryProvider implements SummaryProvider {
  get(): string {
    // TODO replace me with actual call
    return 'GPT generated summary';
  }

}
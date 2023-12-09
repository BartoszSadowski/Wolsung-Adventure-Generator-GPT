import { InflectionProvider } from './inflection.provider';
import { GptProvider } from '../gpt/gpt.provider';

export class GptInflectionProvider implements InflectionProvider {
  correct(value: string): Promise<string> {
    return GptProvider.getInflectionGpt()
      .get(value);
  }
}
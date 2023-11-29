import { InflectionProvider } from './inflection.provider';

export class GptInflectionProvider implements InflectionProvider {
  correct(value: string): string {
    // TODO replace me with actual call
    return `GPT processed string: ${value}`;
  }

}
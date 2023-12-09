import { InflectionProvider } from './inflection.provider';

export class MockInflectionProvider implements InflectionProvider {
  async correct(value: string): Promise<string> {
    return value;
  }
}
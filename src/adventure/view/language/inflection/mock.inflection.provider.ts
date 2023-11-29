import { InflectionProvider } from './inflection.provider';

export class MockInflectionProvider implements InflectionProvider {
  correct(value: string): string {
    return value;
  }
}
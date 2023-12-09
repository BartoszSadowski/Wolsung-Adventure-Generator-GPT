export interface InflectionProvider {
  correct(value: string): Promise<string>;
}
import { Adventure } from '../../../adventure';

export interface SummaryProvider {
  get(adventure: Adventure): string;
}
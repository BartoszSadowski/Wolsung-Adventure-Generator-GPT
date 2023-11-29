import { Adventure } from '../../../adventure';

export interface TitleProvider {
  get(adventure: Adventure): string;
}
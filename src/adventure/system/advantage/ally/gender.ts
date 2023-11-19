import { getRandomElement } from '../../../../utility/random/list.utils';

export enum Gender {
  MALE = 'mężczyzna',
  FEMALE = 'kobieta',
}

export function getRandomGender() {
  return getRandomElement(Object.values(Gender)) as Gender;
}
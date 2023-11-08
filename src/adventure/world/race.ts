import { getRandomElement } from '../../random/list.utils';

export enum Race {
  ELF = 'elf',
  OGRE = 'ogr',
  TROLL = 'troll',
  GNOME = 'gnom',
  DWARF = 'krasnolud',
  HALFLING = 'niziołek',
  NIKS = 'niks',
  ORC = 'ork',
}

export function getRandomRace() {
  return getRandomElement(Object.values(Race)) as Race;
}
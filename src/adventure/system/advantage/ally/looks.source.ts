import { Race } from '../../../world/race';
import { AdvantageDescriptorModel, AdvantageDescriptorSource } from '../advantageDescriptor.provider';

enum Looks {
  HANDSOME = 'przystojny',
  BEAUTIFUL = 'piękny',
  UGLY = 'brzydki',
  TALL = 'wysoki',
  SHORT = 'niski',
  MUSCULAR = 'umięśniony',
  FAT = 'gruby',
  THIN = 'chudy',
}

export class LooksSource extends AdvantageDescriptorSource {
  constructor() {
    super([
      new AdvantageDescriptorModel('1', Looks.HANDSOME,
        new Set<Race>([Race.ORC, Race.TROLL, Race.DWARF, Race.GNOME, Race.NIKS, Race.OGRE]), ['2', '3']),
      new AdvantageDescriptorModel('2', Looks.BEAUTIFUL,
        new Set<Race>([Race.NIKS, Race.ELF, Race.ORC, Race.HALFLING]), ['1', '3']),
      new AdvantageDescriptorModel('3', Looks.UGLY,
        new Set<Race>([Race.OGRE, Race.GNOME, Race.NIKS, Race.ORC, Race.HALFLING, Race.DWARF]), ['2', '1']),
      new AdvantageDescriptorModel('4', Looks.TALL,
        new Set<Race>([Race.NIKS, Race.ELF, Race.TROLL, Race.OGRE, Race.ORC]), ['5']),
      new AdvantageDescriptorModel('5', Looks.SHORT,
        new Set<Race>([Race.GNOME, Race.HALFLING, Race.DWARF, Race.NIKS]), ['4']),
      new AdvantageDescriptorModel('6', Looks.MUSCULAR,
        new Set<Race>([Race.DWARF, Race.NIKS, Race.ORC, Race.TROLL, Race.OGRE]), []),
      new AdvantageDescriptorModel('7', Looks.FAT,
        new Set<Race>([Race.DWARF, Race.NIKS, Race.ORC, Race.TROLL, Race.OGRE, Race.HALFLING]), ['8']),
      new AdvantageDescriptorModel('8', Looks.THIN, new Set<Race>([Race.NIKS, Race.ELF, Race.GNOME, Race.ORC]), ['7']),
    ]);
  }
}
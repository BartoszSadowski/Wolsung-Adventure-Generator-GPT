import { Tag } from '../../../common/tag';
import { getRandomElement, getRandomSubList } from '../../../random/list.utils';
import { Party } from '../party';
import { goalTags } from './goalTags';
import { relationType } from '../relation';

export interface Treasure {
  name: string;
  securityMeasures: Array<string>;
}

class TreasureClass {
  constructor(
    private tags: Array<Tag>,
    private possibleValues: Array<string>,
    private possibleSecurityMeasures: Array<string>,
  ) {
  }

  public getTreasure(): Treasure {
    return {
      name: getRandomElement(this.possibleValues),
      securityMeasures: getRandomSubList(this.possibleSecurityMeasures, 2, 4),
    };
  }

  public matches(parties: Array<Party>): boolean {
    return this.tags.every(tag =>
      !!tag.negated !== parties.some(party =>
        party.tags.some(partyTag => partyTag === tag.value)));
  }
}

export class TreasureProvider {
  private readonly treasureClasses: Array<TreasureClass> = [
    new TreasureClass(
      [
        new Tag(goalTags.ARTIFACT),
      ],
      [
        'Perła Mocy',
        'Diamentowa Ostrzałka',
        'Miecz Wiecznej Nocy',
        'Kapelusz Niewidzialności',
        'Amulet Przeszłości',
        'Złota Filarowa Figurka',
        'Kryształowe Oczy Wieszczki',
        'Luneta Widzenia Przeszłości',
        'Złoty Skarabeusz',
      ],
      [
        'wielka mechaniczna bramka',
        'automatyczny dron patrolowy',
        'zegarowy system alarmowy',
        'parowa bariera antywłamaniowa',
        'dźwiękowy czujnik ruchu',
        'pneumatyczny system monitorowania',
        'dymna zasłona zakłócająca wzrok',
        'ręcznie sterowany gatling gun',
      ],
    ),
    new TreasureClass(
      [
        new Tag(goalTags.PERSONAL),
      ],
      [
        'Dziennik Tajemnych Schematów',
        'List Miłosny z Tajemniczego Romansu',
        'Złota Spinka do Włosów',
        'Parowa Lupa do Lektury Starych Listów',
        "Złota Poduszka z Napisem 'Słodka Zemsta",
        'Kalendarz z Datą Kluczowej Decyzji',
        'Mechaniczna Moneta od Wiernego Towarzysza',
        'Szkicownik z Wykreślonymi Planami Intrygi',
        'Parowy Zegar z Wygrawerowaną Sentencją',
      ],
      [
        'zamek maniczny z dwufazowym mechanizmem',
        'maniczne pole ochronne',
        'mechaniczna pantera',
        'parowa statua strażnika w hallu',
        'książka w regale otaczająca artefakt aurą niewidzialności',
      ],
    ),
    new TreasureClass(
      [
        new Tag(goalTags.PERSONAL),
        new Tag(relationType.PEOPLE.RELATIVE),
      ],
      [
        'Zaklęty Medalion Rodzinny',
        'Zegar Dziadka, Źródło Inspiracji',
        'Mechaniczna Róża od Dawno Utraconej Miłości',
        'Skrzynia Pamiątek z Dzieciństwa',
        'Mechaniczna Moneta od Wiernego Towarzysza',
        'Szkicownik z Wykreślonymi Planami Intrygi',
        'Parowy Zegar z Wygrawerowaną Sentencją',
      ],
      [
        'zamek maniczny z dwufazowym mechanizmem',
        'książka w regale otaczająca artefakt aurą niewidzialności',
      ],
    ),
  ];

  getFromParties(parties: Array<Party>): Treasure {
    const matchingTreasureClasses = this.treasureClasses.filter(treasureClass => treasureClass.matches(parties));
    if (matchingTreasureClasses.length === 0) {
      throw new Error(`Cannot prepare treasure for given set of parties ${this.stringify(parties)}`);

    }
    return getRandomElement(matchingTreasureClasses).getTreasure();
  }

  private stringify(parties: unknown) {
    return JSON.stringify(parties, null, '  ');
  }
}
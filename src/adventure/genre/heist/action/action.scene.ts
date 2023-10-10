import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Party } from '../../../party/party';

export class ActionScene extends Scene {
  constructor(parties: Array<Party>) {
    super(parties);
    this.addGoal(PartyType.GM, 'Pozwolić drużynie poczuć cel w garści');
  }

  // Test weryfikujący czy udało się wykraść przedmiot (definiuje nastrój pozostałych scen)
  // Szanse dodatkowe zyski
  // Zagrożenia wczesne wykrycie, zdrady, generowane
}
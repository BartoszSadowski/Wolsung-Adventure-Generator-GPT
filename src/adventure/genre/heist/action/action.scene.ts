import { Scene } from '../../../scene/scene';
import { PartyType } from '../../../party/partyType';
import { Parties } from '../../../party/parties';

export class ActionScene extends Scene {
  constructor(parties: Parties) {
    super(parties);

    // const treasu

    this.addGoal(PartyType.GM, 'Pozwolić drużynie poczuć cel w garści');
    this.addGoal(PartyType.TEAM, 'Wykraść');
    this.addGoal(PartyType.ANTAGONIST, 'Zabezpieczyć cel');
  }

  // TODO
  // Test weryfikujący czy udało się wykraść przedmiot (definiuje nastrój pozostałych scen)
  // Szanse dodatkowe zyski
  // Zagrożenia wczesne wykrycie, zdrady, generowane
}
import {Scene} from "../../scene/scene";
import {PartyType} from "../../party/partyType";

export class ComplicationScene extends Scene {
    constructor() {
        super();
        this.addGoal(PartyType.GM, "Podbić ekscytację")
    }
}
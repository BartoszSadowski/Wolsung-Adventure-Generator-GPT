import {Scene} from "../../scene/scene";
import {PartyType} from "../../party/partyType";

export class ActionScene extends Scene {
    constructor() {
        super();
        this.addGoal(PartyType.GM, "Pozwolić drużynie poczuć cel w garści");
    }
}
import {Party} from "./party";
import {PartyType} from "./partyType";

export class GoalParty extends Party {
    partyType = PartyType.GOAL;

    constructor(
        public readonly type: String,
        public readonly name: String
    ) {
        super();
    }
}
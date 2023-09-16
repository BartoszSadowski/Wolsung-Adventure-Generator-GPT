import {PartyType} from "../party/partyType";

export class Scene {
    goals: Partial<Record<PartyType, String>> = {};
    where = "";
    initialConditions = "";
    result = "";
    problems = [];


    protected addGoal(key: PartyType, value: String) {
        this.goals[key] = value;
    }

}

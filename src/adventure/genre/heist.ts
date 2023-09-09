import {Adventure} from "../adventure";
import {Genre} from "./genre";

export class Heist extends Genre {

    getStructure(): Adventure {
        const adventure = new Adventure();

        return adventure;
    }
}
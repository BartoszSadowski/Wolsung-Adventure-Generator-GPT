import {Adventure} from "../adventure";
import {Party} from "../party/party";

export abstract class Genre {
    constructor(public readonly parties: Array<Party>) {
    }

    abstract getStructure(): Adventure;
}
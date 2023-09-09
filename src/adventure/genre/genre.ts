import {Adventure} from "../adventure";

export abstract class Genre {
    abstract getStructure(): Adventure;
}
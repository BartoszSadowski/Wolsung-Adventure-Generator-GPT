import {Genre} from "./genre";
import {Heist} from "./heist/heist";
import {Party} from "../party/party";

export class GenreProvider {
    public static provideRandom(parties: Array<Party>): Genre {
        return new Heist(parties);
    }
}
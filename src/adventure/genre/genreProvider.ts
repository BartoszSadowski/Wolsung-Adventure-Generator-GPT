import {Genre} from "./genre";
import {Heist} from "./heist";

export class GenreProvider {
    public static provideRandom(): Genre {
        return new Heist();
    }
}
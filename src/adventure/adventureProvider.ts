import {GenreProvider} from "./genre/genreProvider";

export class AdventureProvider {
    generate() {
        const genre = GenreProvider.provideRandom();

        return genre.getStructure();
    }
}
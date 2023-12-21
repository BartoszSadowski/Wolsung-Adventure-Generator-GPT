import { TitleProvider } from './title.provider';
import { GptProvider } from '../gpt/gpt.provider';
import { Adventure } from '../../../adventure';

export class GptTitleProvider implements TitleProvider {
  get(adventure: Adventure): Promise<string> {
    const adventureJson = JSON.stringify(adventure);

    return GptProvider.getGenerativeGpt()
      .get(`Nadaj tytuł następującej przygodzie: ${adventureJson}.
      Użyj nie więcej niż 4 słowa.`);
  }
}
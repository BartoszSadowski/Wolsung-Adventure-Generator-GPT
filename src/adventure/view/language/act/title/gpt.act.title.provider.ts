import { ActTitleProvider } from './act.title.provider';
import { getActTranslation } from './act.translations';
import { GptProvider } from '../../gpt/gpt.provider';
import { Scene } from '../../../../scene/scene';

export class GptActTitleProvider implements ActTitleProvider {
  async get(key: string, scene: Scene): Promise<string> {
    const sceneJson = JSON.stringify(scene);

    const title = await GptProvider.getDescriptionGpt()
      .get(`Napisz tytuł dla następującej sceny: ${sceneJson}.
      Nie używaj słowa tytuł.
      Użyj nie więcej niż 4 słów.`);

    return `${getActTranslation(key)}: ${title}`;
  }
} 
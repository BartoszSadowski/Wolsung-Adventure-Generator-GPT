import { SectionsProvider } from './sections.provider';
import { Scene } from '../../../../scene/scene';

export class GptSectionsProvider implements SectionsProvider {
  async get(scene: Scene): Promise<Array<string>> {
    // TODO replace me with actual call
    return ['GPT generated description'];
  }

}
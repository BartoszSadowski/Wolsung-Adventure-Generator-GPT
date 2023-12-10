import { AdvantageProvider } from './advantage.provider';
import { Scene } from '../../../../scene/scene';
import { AdvantageView } from './advantage.view';

export class GptAdvantageProvider implements AdvantageProvider {
  async get(scene: Scene): Promise<Array<AdvantageView>> {
    // TODO replace me with actual call
    return [];
  }
}

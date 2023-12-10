import { AdvantageProvider } from './advantage.provider';
import { Scene } from '../../../../scene/scene';
import { AdvantageView } from './advantage.view';

export class MockAdvantageProvider implements AdvantageProvider {
  async get(scene: Scene): Promise<Array<AdvantageView>> {
    return scene.advantages.map(advantage => new AdvantageView(
      `${advantage.type} -  ${advantage.name}: ${advantage.description}`,
      advantage.traits,
    ));
  }
}
import { Scene } from '../../../../scene/scene';
import { AdvantageView } from './advantage.view';

export interface AdvantageProvider {
  get(scene: Scene): Promise<Array<AdvantageView>>;
}
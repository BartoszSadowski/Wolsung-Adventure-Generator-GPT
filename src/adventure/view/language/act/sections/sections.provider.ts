import { Scene } from '../../../../scene/scene';

export interface SectionsProvider {
  get(scene: Scene): Promise<Array<string>>;
}
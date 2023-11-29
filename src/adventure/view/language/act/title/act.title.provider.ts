import { Scene } from '../../../../scene/scene';

export interface ActTitleProvider {
  get(key: string, scene: Scene): string;
}
import { SectionsProvider } from './sections.provider';
import { Scene } from '../../../../scene/scene';

export class MockSectionsProvider implements SectionsProvider {
  async get(scene: Scene): Promise<Array<string>> {
    return [
      `Akcja dzieje się w ${scene.where}`,
    ];
  }
}
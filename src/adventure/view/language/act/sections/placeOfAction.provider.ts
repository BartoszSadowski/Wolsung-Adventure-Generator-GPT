import { Scene } from '../../../../scene/scene';
import { Section } from './section';

export interface PlaceOfActionProvider {
  get(scene: Scene): Promise<Section>;
}

export class GptPlaceOfActionProvider implements PlaceOfActionProvider {
  async get(scene: Scene): Promise<Section> {
    // TODO replace me with actual call
    return new Section(
      ['GPT generated place description'],
    );
  }
}

export class MockPlaceOfActionProvider implements PlaceOfActionProvider {
  async get(scene: Scene): Promise<Section> {
    return new Section(
      [`Akcja dzieje się w ${scene.where}`],
    );
  }
}
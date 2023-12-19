import { Scene } from '../../../../scene/scene';
import { Section } from './section';
import { GptProvider } from '../../gpt/gpt.provider';

export interface PlaceOfActionProvider {
  get(scene: Scene): Promise<Section>;
}

export class GptPlaceOfActionProvider implements PlaceOfActionProvider {
  async get(scene: Scene): Promise<Section> {
    const placeOfAction = JSON.stringify(scene.placeOfAction);

    const description = await GptProvider.getGenerativeGpt()
      .get(`Napisz akapit o tym, że akcja dzieje się w miejscu: ${placeOfAction}. 
      Rozpocznij sformułowaniem podobnym do "Drużyna znajduje się".`);

    return new Section([description]);
  }
}

export class MockPlaceOfActionProvider implements PlaceOfActionProvider {
  async get(scene: Scene): Promise<Section> {
    return new Section(
      [`Akcja dzieje się w ${scene.placeOfAction.name}`],
    );
  }
}
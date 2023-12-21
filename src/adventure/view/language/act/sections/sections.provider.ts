import { Scene, SequenceElement } from '../../../../scene/scene';
import { PlaceOfActionProvider } from './placeOfAction.provider';
import { DescriptionProvider } from './descriptionProvider';
import { Section } from './section';
import { TestProvider } from './test.provider';
import { PlaceOfAction } from '../../../../scene/placeOfAction';

export class SectionsProvider {
  constructor(
    private readonly placeOfActionProvider: PlaceOfActionProvider,
    private readonly descriptionProvider: DescriptionProvider,
    private readonly testProvider: TestProvider,
  ) {
  }


  async get(scene: Scene): Promise<Array<Section>> {
    return (await Promise.all([
      this.placeOfActionProvider.get(scene),
      ...this.getSequence(scene),
    ])).flatMap<Section>(x => x);
  }

  getSequence(scene: Scene): Array<Promise<Section>> {
    return scene.sequence
      .map(sequenceElement => this.getSection(sequenceElement, scene.placeOfAction));
  }

  async getSection(sequenceElement: SequenceElement, placeOfAction: PlaceOfAction) {
    const steps = await this.descriptionProvider.get(sequenceElement, placeOfAction);
    const test = await this.testProvider.get(sequenceElement);

    return new Section(
      steps,
      test,
    );
  }
}
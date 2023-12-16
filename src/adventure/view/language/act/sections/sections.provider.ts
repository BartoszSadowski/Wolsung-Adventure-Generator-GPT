import { Scene, SequenceElement } from '../../../../scene/scene';
import { PlaceOfActionProvider } from './placeOfAction.provider';
import { StepProvider } from './step.provider';
import { Section } from './section';
import { TestProvider } from './test.provider';

export class SectionsProvider {
  constructor(
    private readonly placeOfActionProvider: PlaceOfActionProvider,
    private readonly stepProvider: StepProvider,
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
      .map(sequenceElement => this.getSection(sequenceElement));
  }

  async getSection(sequenceElement: SequenceElement) {
    const steps = await this.stepProvider.get(sequenceElement);
    const test = await this.testProvider.get(sequenceElement);

    return new Section(
      steps,
      test,
    );
  }
}
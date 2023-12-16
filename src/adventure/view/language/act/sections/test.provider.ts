import { SequenceElement } from '../../../../scene/scene';

export abstract class TestProvider {
  async get(sequenceElement: SequenceElement): Promise<Array<string>> {
    const test = sequenceElement.test;

    return [];
  }
}

export class GptTestProvider extends TestProvider {

}

export class MockTestProvider extends TestProvider {

}
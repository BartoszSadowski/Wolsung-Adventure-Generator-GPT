import { SequenceElement } from '../../../../scene/scene';

export interface StepProvider {
  get(sequenceElement: SequenceElement): Promise<Array<string>>;
}

export class GptStepProvider implements StepProvider {
  async get(sequenceElement: SequenceElement): Promise<Array<string>> {
    // TODO replace me with actual call
    return ['First paragraph', 'Second paragraph'];
  }


}

export class MockStepProvider implements StepProvider {
  async get(sequenceElement: SequenceElement): Promise<Array<string>> {
    return [[
      sequenceElement.conditional,
      sequenceElement.who,
      sequenceElement.what,
      sequenceElement.with,
    ]
      .filter(x => x)
      .join(' '),
    ];
  }
}

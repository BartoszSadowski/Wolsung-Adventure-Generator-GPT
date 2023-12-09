import { Gpt } from './gpt';
import OpenAI from 'openai';

enum SetupName {
  GENERATIVE,
  INFLECITON,
}

export class GptProvider {
  private static setups: Map<SetupName, Gpt> = new Map();

  private static setupMessages: Record<SetupName, OpenAI.ChatCompletionMessageParam> = {
    [SetupName.GENERATIVE]: {
      role: 'system',
      // eslint-disable-next-line max-len
      content: 'You are a helpful assistant designed to support tabletop RPG adventure document preparations with plain text responses',
    },
    [SetupName.INFLECITON]: {
      role: 'system',
      content: 'You are language checking system. ' +
        'You are receiving a fragment of text and fixing errors in it. ' +
        'Do not change cardinalities. ' +
        'Do not use quotation marks. ' +
        'Return only fixed text. ' +
        'Do not change casing. ' +
        'Do not change subject of sentence. ' +
        'Start sentences with capital letter and finish with a dot.',
    },
  };


  static getGenerativeGpt() {
    return this.getGpt(SetupName.GENERATIVE);
  }

  static getInflectionGpt() {
    return this.getGpt(SetupName.INFLECITON);
  }

  private static getGpt(name: SetupName) {
    const setup = this.setups.get(name);
    if (setup) {
      return setup;
    }
    return this.createGpt(name);
  }

  private static createGpt(name: SetupName): Gpt {
    const setup = new Gpt(this.setupMessages[name]);
    this.setups.set(name, setup);

    return setup;
  }
}
import { Gpt } from './gpt';
import OpenAI from 'openai';

enum SetupName {
  GENERATIVE,
  INFLECITON,
  DESCRIPTION,
}

export class GptProvider {
  private static setups: Map<SetupName, Gpt> = new Map();

  private static setupMessages: Record<SetupName, OpenAI.ChatCompletionMessageParam> = {
    [SetupName.GENERATIVE]: {
      role: 'system',
      // eslint-disable-next-line max-len
      content: 'You are a helpful assistant designed to support tabletop RPG adventure document preparations with plain text responses.' +
        'Return just a response for given request. ',
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
    [SetupName.DESCRIPTION]: {
      role: 'system',
      content: 'You are writing parts of RPG adventure documents. ' +
        'Adventure is taking place of steampunk world. ' +
        'Modern inventions are replaced by ones using steam and mana (instead of electicity).' +
        'You are responding with paragraphs regarding assigned topic. ' +
        'Paragraphs are directed to Game Master, as he is the one who will be reading those. ' +
        'Do not introduce new characters. ' +
        'Do not use to much invention, if something is vague keep it that way. ' +
        'Do not add information about step of adventure. ' +
        'Write responses in polish. ' +
        'Do not adress the reader directly. ',
    },
  };


  static getGenerativeGpt() {
    return this.getGpt(SetupName.GENERATIVE);
  }

  static getInflectionGpt() {
    return this.getGpt(SetupName.INFLECITON);
  }

  static getDescriptionGpt() {
    return this.getGpt(SetupName.DESCRIPTION);
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
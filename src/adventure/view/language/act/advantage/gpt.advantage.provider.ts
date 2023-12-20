import { AdvantageProvider } from './advantage.provider';
import { Scene } from '../../../../scene/scene';
import { AdvantageView } from './advantage.view';
import { GptProvider } from '../../gpt/gpt.provider';

export class GptAdvantageProvider implements AdvantageProvider {
  async get(scene: Scene): Promise<Array<AdvantageView>> {
    return Promise.all(scene.advantages.map(async ({ traits, ...traitlessAdvantage }) => {
      const description = await this.getDescription(traitlessAdvantage);

      return new AdvantageView(
        description,
        traits,
      );
    }));
  }

  private async getDescription(traitlessAdvantage: Record<string, unknown>): Promise<string> {
    const advantageText = JSON.stringify(traitlessAdvantage);

    return GptProvider.getDescriptionGpt()
      .get(`Napisz akapit opisujący element świata przedstawionego do użycia w przygododzie przez mistrza gry
       na podstawie następujących danych: ${advantageText}`);
  }
}

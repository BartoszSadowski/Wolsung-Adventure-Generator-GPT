import { SequenceElement } from '../../../../scene/scene';
import { GptProvider } from '../../gpt/gpt.provider';
import { PlaceOfAction } from '../../../../scene/placeOfAction';

export interface DescriptionProvider {
  get(sequenceElement: SequenceElement, placeOfAction: PlaceOfAction): Promise<string>;
}

export class GptDescriptionProvider implements DescriptionProvider {
  async get({ test, ...rest }: SequenceElement, placeOfAction: PlaceOfAction): Promise<string> {
    const sceneJson = JSON.stringify(rest);

    return GptProvider.getDescriptionGpt()
      .get(`Napisz akapit opisujący fragment sceny do użycia w przygodzie przez mistrza gry.
      Akcja dzieje się w ${placeOfAction.name}, miejsce to zostało opisane już w poprzednim akapicie.
      Nie wspominaj o miejscu akcji wprost.
      Użyj następującyhc danych: ${sceneJson}`);
  }
}

export class MockDescriptionProvider implements DescriptionProvider {
  async get(sequenceElement: SequenceElement): Promise<string> {
    return [
      sequenceElement.conditional,
      sequenceElement.who,
      sequenceElement.what,
      sequenceElement.with,
    ]
      .filter(x => x)
      .join(' ');
  }
}

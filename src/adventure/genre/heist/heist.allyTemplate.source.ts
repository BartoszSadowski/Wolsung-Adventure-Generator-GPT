import { Trait } from '../../system/advantage/trait/trait';
import { AdvantageTrait } from '../../system/advantage/trait/advantage.trait';
import { AsecurationTrait } from '../../system/advantage/trait/asecuration.trait';

export interface AllyTemplate {
  description: string,
  traits: Array<Trait>
}

export class HeistAllyTemplateSource {
  public static readonly templates: Array<AllyTemplate> = [
    {
      description: 'Złodziej dżentelmen',
      traits: [new AdvantageTrait('gdy wykradasz')],
    },
    {
      description: 'Bliski przyjaciel',
      traits: [new AsecurationTrait('gdy potrzebujesz oczu dookoła głowy')],
    },
  ];
}

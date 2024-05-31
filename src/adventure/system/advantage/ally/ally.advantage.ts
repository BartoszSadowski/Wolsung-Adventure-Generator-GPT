import { Advantage, AdvantageType } from '../advantage';
import { Race } from '../../../world/race';
import { Trait } from '../trait/trait';
import { Country } from '../../../world/country';
import { Gender } from './gender';

export class AllyAdvantage extends Advantage {
  type = AdvantageType.ALLY;

  constructor(
    name: string,
    description: string,
    traits: Array<Trait>,
    public readonly additionalDescription: AllyDescription,
  ) {
    super(name, description, traits);
  }

}

export class AllyDescription {
  constructor(
    public readonly race: Race,
    public readonly nationality: Country,
    public readonly gender: Gender,
    public readonly looks: Array<string>,
    public readonly traits: Array<string>,
  ) {
  }

}
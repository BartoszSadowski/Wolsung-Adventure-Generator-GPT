import { Race } from '../../world/race';
import { getRandomElement } from '../../../random/list.utils';

export class AdvantageDescriptorModel {
  constructor(
    public readonly id: string,
    public readonly value: string,
    public readonly races: Set<Race>,
    public readonly excludes: Array<string>,
  ) {
  }
}

export abstract class AdvantageDescriptorSource {
  protected constructor(protected readonly data: Array<AdvantageDescriptorModel>) {
  }

  get(race: Race) {
    return this.data
      .filter((advantageDescriptor) => advantageDescriptor.races.has(race));
  }
}

export class AdvantageDescriptorProvider {
  constructor(private readonly source: AdvantageDescriptorSource) {
  }

  get(race: Race, count?: number): Array<string> {
    const all = this.source.get(race);
    const picked = count ? this.getMultiple(all, count) : this.getOne(all);
    return picked.map(look => look.value);
  }

  private getOne(looks: Array<AdvantageDescriptorModel>): Array<AdvantageDescriptorModel> {
    return [getRandomElement(looks)];
  }

  private getMultiple(looks: Array<AdvantageDescriptorModel>, count: number): Array<AdvantageDescriptorModel> {
    if (count < 2) {
      return this.getOne(looks);
    }

    const picked: Array<AdvantageDescriptorModel> = [];
    let candidates = looks;
    const exclusions = new Set<string>();

    while (picked.length < count && candidates.length > 0) {
      // pick candidate
      const pick = getRandomElement(candidates);
      picked.push(pick);

      // update exclusions
      exclusions.add(pick.id);
      pick.excludes.map(exclusion => exclusions.add(exclusion));

      // update candidates
      candidates = candidates.filter(candidate => !exclusions.has(candidate.id));
    }
    return picked;
  }
}
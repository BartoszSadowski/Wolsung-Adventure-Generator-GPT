import { LocationTag } from './locationTag';
import { getRandomElement } from '../../random/list.utils';
import { locationTags } from './locationTags';

interface PossibleLocation {
  value: string,
  matchingTags: Array<string>;
}

export class LocationBuilder {
  private static possibleLocations: Array<PossibleLocation> = [
    {
      value: 'Muzeum',
      matchingTags: [
        locationTags.MUSEUM,
      ],
    },
    {
      value: 'Klub Dżentelmenów',
      matchingTags: [
        locationTags.PEACEFUL,
        locationTags.COFFEE_TIME,
        locationTags.PUBLIC_PLACE,
      ],
    },
  ];

  private readonly tags: Array<LocationTag> = [];

  getLocation(): string {
    const matchingLocations = this.findLocationMatchingLogs();
    if (matchingLocations.length === 0) {
      throw new Error(`Cannot find location for set of tags: ${this.tagsToString()}`);
    }
    return getRandomElement(matchingLocations).value;
  }

  addTag(tag: LocationTag) {
    this.tags.push(tag);
  }

  private tagsToString() {
    return this.tags.map(tag => `{value: ${tag.value}, negated: ${!!tag.negated}}`);
  }

  private findLocationMatchingLogs() {
    return this.tags.reduce<Array<PossibleLocation>>((possibleLocations, tag) => {
      return possibleLocations
        .filter(location => location
          .matchingTags.some(
            (matchingTag) => matchingTag === tag.value,
          ) !== !!tag.negated);
    }, LocationBuilder.possibleLocations);
  }
}

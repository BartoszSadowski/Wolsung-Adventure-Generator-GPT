import { LocationTag } from './locationTag';

export class LocationBuilder {
  private readonly tags: Array<LocationTag> = [];

  getLocation(): string {
    console.log('location builder tags ', this.tags);
    return '???';
  }

  addTag(tag: LocationTag) {
    this.tags.push(tag);
  }
}
import { AdvantageDescriptorModel, AdvantageDescriptorSource } from '../advantageDescriptor.provider';
import { getAllRacesSet } from '../../../world/race';

enum DescriptionTrait {
  SMART = 'bystry',
  FUNNY = 'zabawny',
  INSIGHTFUL = 'wnikliwy',
  LOUD = 'głośny',
  SERIOUS = 'poważny',
  QUIET = 'cichy',
}

export class DescriptionTraitSource extends AdvantageDescriptorSource {
  constructor() {
    super([
      new AdvantageDescriptorModel('1', DescriptionTrait.SMART, getAllRacesSet(), []),
      new AdvantageDescriptorModel('2', DescriptionTrait.FUNNY, getAllRacesSet(), ['5']),
      new AdvantageDescriptorModel('3', DescriptionTrait.INSIGHTFUL, getAllRacesSet(), []),
      new AdvantageDescriptorModel('4', DescriptionTrait.LOUD, getAllRacesSet(), ['5', '4']),
      new AdvantageDescriptorModel('5', DescriptionTrait.SERIOUS, getAllRacesSet(), ['2', '4']),
      new AdvantageDescriptorModel('6', DescriptionTrait.QUIET, getAllRacesSet(), ['4']),
    ]);
  }
}